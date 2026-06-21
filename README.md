# Espacio Raku website

## Production SEO URL

Set `SITE_URL` to the final public origin when building the production image:

```bash
SITE_URL=https://www.example.com npm run build
```

The value must not include a path. It enables the canonical URL, absolute social preview
image, `sitemap.xml`, and the sitemap entry in `robots.txt`. The Cloud Run deployment
script forwards `SITE_URL` to the Docker build automatically.
