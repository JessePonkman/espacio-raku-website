import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import {
  allPageMeta,
  CANONICAL_ORIGIN,
  homeMeta,
  pageUrl,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_PATH,
} from './src/data/seo.js';

function normalizeSiteUrl(rawUrl = CANONICAL_ORIGIN) {
  const url = new URL(rawUrl || CANONICAL_ORIGIN);
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error('SITE_URL must use http or https.');
  }
  if (url.pathname !== '/') {
    throw new Error('SITE_URL must be an origin without a path.');
  }

  url.hash = '';
  url.search = '';
  return url.toString().replace(/\/$/, '');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function upsertTag(html, pattern, tag) {
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace('</head>', `${tag}\n</head>`);
}

function updateHomeMetadata(html, siteUrl) {
  const canonicalUrl = pageUrl(siteUrl, homeMeta);
  const socialImageUrl = `${siteUrl}${SOCIAL_IMAGE_PATH}`;
  const alternateTags = [
    `<link rel="alternate" hreflang="es-AR" href="${canonicalUrl}" />`,
    `<link rel="alternate" hreflang="en" href="${siteUrl}/en/" />`,
    `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`,
  ].join('\n');

  let next = html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(homeMeta.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta name="description" content="${escapeHtml(homeMeta.description)}" />\n`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta property="og:title" content="${escapeHtml(homeMeta.ogTitle ?? homeMeta.title)}" />\n`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta property="og:description" content="${escapeHtml(homeMeta.ogDescription ?? homeMeta.description)}" />\n`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta name="twitter:title" content="${escapeHtml(homeMeta.twitterTitle ?? homeMeta.title)}" />\n`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta name="twitter:description" content="${escapeHtml(homeMeta.twitterDescription ?? homeMeta.description)}" />\n`,
    );

  next = upsertTag(next, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  next = upsertTag(next, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  next = upsertTag(next, /<meta\s+property="og:image"[^>]*>/, `<meta property="og:image" content="${socialImageUrl}" />`);
  next = upsertTag(next, /<meta\s+property="og:image:alt"[^>]*>/, `<meta property="og:image:alt" content="${escapeHtml(SOCIAL_IMAGE_ALT)}" />`);
  next = upsertTag(next, /<meta\s+name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${socialImageUrl}" />`);
  next = upsertTag(next, /<link\s+rel="alternate"\s+hreflang="es-AR"[^>]*>[\s\S]*?<link\s+rel="alternate"\s+hreflang="x-default"[^>]*>/, alternateTags);

  return next;
}

function seoAssets(siteUrl) {
  return {
    name: 'espacio-raku-seo-assets',
    transformIndexHtml(html) {
      return updateHomeMetadata(html, siteUrl);
    },
    generateBundle() {
      const robotsLines = ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl}/sitemap.xml`];
      const sitemapUrls = allPageMeta
        .map((page) => {
          const lastmod = `\n    <lastmod>${page.lastmod ?? '2026-07-01'}</lastmod>`;
          return `  <url>\n    <loc>${pageUrl(siteUrl, page)}</loc>${lastmod}\n    <changefreq>${page.changefreq ?? 'monthly'}</changefreq>\n    <priority>${page.priority ?? '0.5'}</priority>\n  </url>`;
        })
        .join('\n');

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `${robotsLines.join('\n')}\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || env.SITE_URL || CANONICAL_ORIGIN);

  return {
    plugins: [react(), seoAssets(siteUrl)],
    server: { port: 5173, open: true },
  };
});
