import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { join, posix, relative, sep } from 'node:path';
import sharp from 'sharp';

const publicDir = 'public';
const sourceRoot = join(publicDir, 'assets');
const outputRoot = join(sourceRoot, 'optimized', 'v1');
const ogOutputPath = join(sourceRoot, 'og', 'espacio-raku-chacras-de-coria.jpg');

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


async function generateOgImage() {
  const width = 1200;
  const height = 630;
  const heroPath = join(sourceRoot, 'photos', 'hero-piscina.jpg');
  const logoPath = join(sourceRoot, 'brand', 'logo-blanco.png');
  const overlaySvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#2B2A28" stop-opacity="0.74"/>
          <stop offset="0.58" stop-color="#2B2A28" stop-opacity="0.34"/>
          <stop offset="1" stop-color="#2B2A28" stop-opacity="0.1"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#shade)"/>
      <text x="72" y="330" font-family="Georgia, serif" font-size="76" fill="#FFF8F2" letter-spacing="-1">
        Alojamiento en
      </text>
      <text x="72" y="415" font-family="Georgia, serif" font-size="76" fill="#FFF8F2" letter-spacing="-1">
        Chacras de Coria
      </text>
      <text x="76" y="480" font-family="Arial, sans-serif" font-size="28" font-weight="600" fill="#F5EFE4">
        Lofts y departamento con piscina · Mendoza
      </text>
    </svg>`;

  await mkdir(join(sourceRoot, 'og'), { recursive: true });

  const logoBuffer = await sharp(logoPath)
    .resize({ width: 270, withoutEnlargement: true })
    .png()
    .toBuffer();

  await sharp(heroPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .composite([
      { input: Buffer.from(overlaySvg), top: 0, left: 0 },
      { input: logoBuffer, top: 72, left: 72 },
    ])
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(ogOutputPath);
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

await generateOgImage();

const images = await collectImages(sourceRoot);
await mkdir(outputRoot, { recursive: true });

await Promise.all(images.map(optimizeOne));
await copyFontAssets();

console.log(`Optimized ${images.length} source images and copied ${FONT_FILES.length} fonts into ${outputRoot}`);
