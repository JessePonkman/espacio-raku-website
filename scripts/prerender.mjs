import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';
import {
  allPageMeta,
  CANONICAL_ORIGIN,
  homeMeta,
  pageUrl,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_PATH,
} from '../src/data/seo.js';

const outputPath = resolve('dist/index.html');
const marker = '<div id="root"></div>';
const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || CANONICAL_ORIGIN).replace(/\/$/, '');

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

function stripExistingAlternates(html) {
  return html.replace(/\n?<link\s+rel="alternate"\s+hreflang="[^"]+"[^>]*\/>/g, '');
}

function metadataFor(page) {
  return {
    title: page.title,
    description: page.description,
    ogTitle: page.ogTitle ?? page.title,
    ogDescription: page.ogDescription ?? page.description,
    twitterTitle: page.twitterTitle ?? page.ogTitle ?? page.title,
    twitterDescription: page.twitterDescription ?? page.ogDescription ?? page.description,
  };
}

function updateMetadata(html, page) {
  const meta = metadataFor(page);
  const canonicalUrl = pageUrl(siteUrl, page);
  const socialImageUrl = `${siteUrl}${SOCIAL_IMAGE_PATH}`;
  const lang = page.lang ?? 'es-AR';
  const ogLocale = lang === 'en' ? 'en_US' : 'es_AR';
  const alternateTags = page.path === '/' || page.path === '/en/'
    ? [
        `<link rel="alternate" hreflang="es-AR" href="${pageUrl(siteUrl, homeMeta)}" />`,
        `<link rel="alternate" hreflang="en" href="${siteUrl}/en/" />`,
        `<link rel="alternate" hreflang="x-default" href="${pageUrl(siteUrl, homeMeta)}" />`,
      ].join('\n')
    : '';

  let next = html
    .replace(/<html\s+lang="[^"]+"/, `<html lang="${lang}"`)
    .replace(/<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>(?:\n)?/, `<meta property="og:locale" content="${ogLocale}" />\n`)
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta name="description" content="${escapeHtml(meta.description)}" />\n`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />\n`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />\n`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta name="twitter:title" content="${escapeHtml(meta.twitterTitle)}" />\n`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>(?:\n)?/,
      `<meta name="twitter:description" content="${escapeHtml(meta.twitterDescription)}" />\n`,
    );

  next = upsertTag(next, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  next = upsertTag(next, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  next = upsertTag(next, /<meta\s+property="og:image"[^>]*>/, `<meta property="og:image" content="${socialImageUrl}" />`);
  next = upsertTag(next, /<meta\s+property="og:image:alt"[^>]*>/, `<meta property="og:image:alt" content="${escapeHtml(SOCIAL_IMAGE_ALT)}" />`);
  next = upsertTag(next, /<meta\s+name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${socialImageUrl}" />`);

  next = stripExistingAlternates(next);
  if (alternateTags) {
    next = next.replace('</head>', `${alternateTags}\n</head>`);
  }

  return next;
}

function outputPathFor(page) {
  if (page.path === '/') return outputPath;
  return resolve('dist', page.path.replace(/^\//, ''), 'index.html');
}

const vite = await createServer({
  appType: 'custom',
  configFile: false,
  logLevel: 'error',
  plugins: [react()],
  server: { middlewareMode: true, ws: false },
});

try {
  const template = await readFile(outputPath, 'utf8');
  if (!template.includes(marker)) {
    throw new Error(`Prerender marker not found in ${outputPath}`);
  }

  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

  for (const page of allPageMeta) {
    const appHtml = render(page.path);
    const html = updateMetadata(
      template.replace(marker, `<div id="root">${appHtml}</div>`),
      page,
    );
    const targetPath = outputPathFor(page);
    await mkdir(dirname(targetPath), { recursive: true });
    await writeFile(targetPath, html);
  }
} finally {
  await vite.close();
}
