const OPTIMIZED_BASE = '/assets/optimized/v1';

export const PHOTO_WIDTHS = [320, 480, 640, 768, 960, 1280, 1600];
export const LOGO_WIDTHS = [128, 192, 256, 384, 512];
export const ICON_WIDTHS = [64, 128, 192];

const ASSET_DIMENSIONS = {
  '/assets/brand/logo-blanco.png': [5226, 2730],
  '/assets/brand/logo-color.png': [5225, 2730],
  '/assets/brand/logo-iso-color.png': [2705, 2730],
  '/assets/brand/logo-negro.png': [5226, 2730],
  '/assets/photos/departamento-bano.jpg': [1264, 842],
  '/assets/photos/departamento-cocina.jpg': [1086, 1448],
  '/assets/photos/departamento-dormitorio.jpg': [1448, 1086],
  '/assets/photos/departamento-estar.jpg': [1264, 842],
  '/assets/photos/departamento-estar-comedor.jpg': [1448, 1086],
  '/assets/photos/departamento-estar-comedor-futon.jpg': [1448, 1086],
  '/assets/photos/departamento-sala.jpg': [1365, 768],
  '/assets/photos/loft-deluxe-bano.jpg': [1264, 843],
  '/assets/photos/loft-deluxe-cama.jpg': [1264, 843],
  '/assets/photos/loft-deluxe-dormitorio.jpg': [1448, 1086],
  '/assets/photos/loft-deluxe-ducha.jpg': [1086, 1448],
  '/assets/photos/loft-deluxe-interior.jpg': [1448, 1086],
  '/assets/photos/loft-piscina-bano.jpg': [1086, 1448],
  '/assets/photos/loft-piscina-bano-ducha.jpg': [1086, 1448],
  '/assets/photos/loft-piscina-cama.jpg': [1388, 768],
  '/assets/photos/loft-piscina-exterior.jpg': [1264, 843],
  '/assets/photos/loft-piscina-lavamanos.jpg': [1379, 768],
  '/assets/photos/detalle.jpg': [1200, 1600],
  '/assets/photos/experiences/degustacion-1.jpeg': [960, 1280],
  '/assets/photos/experiences/degustacion-2.jpeg': [960, 1280],
  '/assets/photos/experiences/degustacion-3.jpeg': [960, 1280],
  '/assets/photos/experiences/degustacion-4.jpeg': [960, 1280],
  '/assets/photos/experiences/degustacion-5.jpeg': [3024, 4032],
  '/assets/photos/experiences/yoga.png': [800, 400],
  '/assets/photos/experiences/astrologia.png': [958, 596],
  '/assets/photos/experiences/erica-cesca.jpeg': [985, 1019],
  '/assets/photos/experiences/guia-montana.jpeg': [1080, 1066],
  '/assets/photos/experiences/masaje-tailandes.png': [1600, 750],
  '/assets/photos/experiences/regresion-vidas-pasadas.jpeg': [720, 960],
  '/assets/photos/experiences/yoga-movimiento-erica.jpeg': [1600, 1200],
  '/assets/photos/estacionamiento.jpg': [1448, 1086],
  '/assets/photos/exterior-noche.jpg': [1600, 749],
  '/assets/photos/fogonero.jpg': [1600, 1067],
  '/assets/photos/hero-piscina.jpg': [1600, 1067],
  '/assets/photos/jardin-cochera.jpg': [1448, 1086],
  '/assets/photos/jardin-detalle.jpg': [450, 600],
  '/assets/photos/jardin-pileta.jpg': [1264, 843],
  '/assets/photos/pileta-panoramica.jpg': [1448, 1086],
};

function normalizeSource(src) {
  return src.startsWith('/') ? src : `/${src}`;
}

function sourceBase(src) {
  return normalizeSource(src).replace(/^\//, '').replace(/\.[^.]+$/, '');
}

function fallbackFormat(src) {
  return normalizeSource(src).toLowerCase().endsWith('.png') ? 'png' : 'jpg';
}

function capWidths(widths, intrinsicWidth) {
  if (!intrinsicWidth) return widths;

  const cappedWidths = widths.filter((candidateWidth) => candidateWidth <= intrinsicWidth);
  if (!cappedWidths.includes(intrinsicWidth)) {
    cappedWidths.push(intrinsicWidth);
  }

  return cappedWidths.sort((a, b) => a - b);
}

export function optimizedImageUrl(src, width, format = fallbackFormat(src)) {
  return `${OPTIMIZED_BASE}/${sourceBase(src)}-${width}.${format}`;
}

export function optimizedSrcSet(src, widths, format) {
  return widths.map((width) => `${optimizedImageUrl(src, width, format)} ${width}w`).join(', ');
}

export default function OptimizedImage({
  src,
  alt,
  widths = PHOTO_WIDTHS,
  sizes = '100vw',
  width,
  height,
  decoding = 'async',
  fetchPriority,
  ...props
}) {
  const normalizedSrc = normalizeSource(src);
  const [intrinsicWidth, intrinsicHeight] = ASSET_DIMENSIONS[normalizedSrc] ?? [];
  const fallback = fallbackFormat(normalizedSrc);
  const effectiveWidths = capWidths(widths, intrinsicWidth);
  const largestWidth = effectiveWidths.at(-1);

  return (
    <picture>
      <source type="image/avif" srcSet={optimizedSrcSet(normalizedSrc, effectiveWidths, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={optimizedSrcSet(normalizedSrc, effectiveWidths, 'webp')} sizes={sizes} />
      <img
        src={optimizedImageUrl(normalizedSrc, largestWidth, fallback)}
        srcSet={optimizedSrcSet(normalizedSrc, effectiveWidths, fallback)}
        sizes={sizes}
        alt={alt}
        width={width ?? intrinsicWidth}
        height={height ?? intrinsicHeight}
        decoding={decoding}
        fetchpriority={fetchPriority}
        {...props}
      />
    </picture>
  );
}
