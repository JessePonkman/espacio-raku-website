import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeSiteUrl(rawUrl) {
  if (!rawUrl) return null;

  const url = new URL(rawUrl);
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

function seoAssets(siteUrl) {
  const homeUrl = siteUrl ? `${siteUrl}/` : null;
  const socialImageUrl = siteUrl ? `${siteUrl}/assets/photos/hero-piscina.jpg` : null;

  return {
    name: 'espacio-raku-seo-assets',
    transformIndexHtml() {
      if (!siteUrl) return [];

      return [
        { tag: 'link', attrs: { rel: 'canonical', href: homeUrl }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: homeUrl }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: socialImageUrl }, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'Piscina y jardín de Espacio Raku en Chacras de Coria, Mendoza',
          },
          injectTo: 'head',
        },
        { tag: 'meta', attrs: { name: 'twitter:image', content: socialImageUrl }, injectTo: 'head' },
      ];
    },
    generateBundle() {
      const robotsLines = ['User-agent: *', 'Allow: /'];

      if (siteUrl) {
        robotsLines.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${homeUrl}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
        });
      }

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
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || env.SITE_URL);

  return {
    plugins: [react(), seoAssets(siteUrl)],
    server: { port: 5173, open: true },
  };
});
