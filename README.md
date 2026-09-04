# Espacio Raku website

## Production SEO URL

Set `SITE_URL` to the final public origin when building the production image:

```bash
SITE_URL=https://espacio-raku.com npm run build
```

The value must not include a path. It enables the canonical URL, absolute social preview
image, `sitemap.xml`, and the sitemap entry in `robots.txt`. The Cloud Run deployment
script forwards `SITE_URL` to the Docker build automatically.

## Deploying

```bash
cp .env.deploy.example .env.deploy   # first time only, then fill in real values
./deploy.sh
```

`.env.deploy` is gitignored and loaded automatically, so deploy variables (GCP project,
Cloud Run service/region, `SITE_URL`, etc.) don't need to be retyped on every deploy.
Pass `-e VAR=VALUE` to override a single value for one run, or `--override` to be
re-prompted for everything. `gcloud run deploy` only touches what's passed on the
command line — any runtime env vars already set on the Cloud Run service itself carry
over untouched on every deploy.
