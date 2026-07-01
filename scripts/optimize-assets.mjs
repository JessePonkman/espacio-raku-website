import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { join, posix, relative, sep } from 'node:path';
import sharp from 'sharp';

const publicDir = 'public';
const sourceRoot = join(publicDir, 'assets');
const outputRoot = join(sourceRoot, 'optimized', 'v1');

const PHOTO_WIDTHS = [320, 480, 640, 768, 960, 1280, 1600];
const LOGO_WIDTHS = [128, 192, 256, 384, 512];
const ICON_WIDTHS = [64, 128, 192];
const INPUT_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const FONT_FILES = [
  'inter-latin-400-normal.woff2',
  'inter-latin-500-normal.woff2',
  'inter-latin-600-normal.woff2',
  'inter-latin-700-normal.woff2',
  'cormorant-garamond-latin-400-normal.woff2',
  'cormorant-garamond-latin-500-normal.woff2',
];

function toPosixPath(path) {
  return path.split(sep).join(posix.sep);
}

function extensionOf(path) {
  const match = path.toLowerCase().match(/\.[^.]+$/);
  return match?.[0] ?? '';
}

function withoutExtension(path) {
  return path.replace(/\.[^.]+$/, '');
}

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (fullPath.startsWith(outputRoot)) continue;
      images.push(...await collectImages(fullPath));
      continue;
    }

    if (entry.isFile() && INPUT_EXTENSIONS.has(extensionOf(entry.name))) {
      images.push(fullPath);
    }
  }

  return images;
}

function widthsFor(relativeAssetPath) {
  const normalizedPath = toPosixPath(relativeAssetPath);

  if (normalizedPath === 'assets/brand/logo-iso-color.png') {
    return ICON_WIDTHS;
  }

  if (normalizedPath.startsWith('assets/brand/')) {
    return LOGO_WIDTHS;
  }

  return PHOTO_WIDTHS;
}

function capWidths(widths, sourceWidth) {
  const cappedWidths = widths.filter((width) => width <= sourceWidth);
  if (!cappedWidths.includes(sourceWidth)) {
    cappedWidths.push(sourceWidth);
  }

  return cappedWidths.sort((a, b) => a - b);
}

function formatsFor(inputPath) {
  const extension = extensionOf(inputPath);

  if (extension === '.png') {
    return ['avif', 'webp', 'png'];
  }

  return ['avif', 'webp', 'jpg'];
}

async function optimizeOne(inputPath) {
  const relativeAssetPath = toPosixPath(relative(publicDir, inputPath));
  const baseName = withoutExtension(relativeAssetPath);
  const metadata = await sharp(inputPath).metadata();
  const widths = capWidths(widthsFor(relativeAssetPath), metadata.width);
  const formats = formatsFor(inputPath);

  for (const width of widths) {
    const pipeline = sharp(inputPath).resize({
      width,
      withoutEnlargement: true,
    });

    for (const format of formats) {
      const outputPath = join(outputRoot, `${baseName}-${width}.${format}`);
      await mkdir(join(outputRoot, baseName), { recursive: true });

      let output = pipeline.clone();
      if (format === 'avif') {
        output = output.avif({ quality: metadata.hasAlpha ? 58 : 45, effort: 4 });
      } else if (format === 'webp') {
        output = output.webp({ quality: metadata.hasAlpha ? 82 : 76, effort: 4 });
      } else if (format === 'png') {
        output = output.png({ compressionLevel: 9, adaptiveFiltering: true, effort: 8 });
      } else {
        output = output.jpeg({ quality: 78, mozjpeg: true, progressive: true });
      }

      await output.toFile(outputPath);
    }
  }
}

async function copyFontAssets() {
  const fontsOutputDir = join(outputRoot, 'assets', 'fonts');
  await mkdir(fontsOutputDir, { recursive: true });

  for (const fontFile of FONT_FILES) {
    const packageName = fontFile.startsWith('inter-') ? 'inter' : 'cormorant-garamond';
    const sourcePath = join('node_modules', '@fontsource', packageName, 'files', fontFile);
    const outputPath = join(fontsOutputDir, fontFile);
    await copyFile(sourcePath, outputPath);
  }
}

const images = await collectImages(sourceRoot);
await mkdir(outputRoot, { recursive: true });

await Promise.all(images.map(optimizeOne));
await copyFontAssets();

console.log(`Optimized ${images.length} source images and copied ${FONT_FILES.length} fonts into ${outputRoot}`);
