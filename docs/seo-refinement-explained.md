# SEO refinement: what the last commit does

This document explains commit `99b7629` (`seo refinement`) in simple terms without
hiding the technical details.

For all production examples, the chosen website origin is:

```text
https://espacio-raku.com
```

The canonical version uses HTTPS, has no `www`, and ends with `/` when it represents
the home page:

```text
https://espacio-raku.com/
```

## 1. What problem this commit solves

The change solves two related SEO problems.

### Search engines need to understand what the business offers

The page now states naturally that Espacio Raku offers cabañas, lofts, a department,
temporary accommodation, and lodging in Chacras de Coria, Luján de Cuyo, Mendoza.
Those phrases appear in useful page content rather than in a hidden list of keywords.

### Search engines need useful HTML before JavaScript runs

The website is a React single-page application. Previously, the original HTML sent by
the server contained an empty root element:

```html
<div id="root"></div>
```

React filled that element only after the browser downloaded and executed JavaScript.
Modern search engines can often execute JavaScript, but making them wait adds work and
can delay or weaken indexing.

The production build now renders the React application into `dist/index.html` ahead of
time. Visitors and crawlers receive the headings, paragraphs, links, image descriptions,
FAQ, and structured data in the first HTML response.

JavaScript still activates the interactive parts afterward. This is called hydration.

## 2. The complete build flow

The production flow is:

```text
SITE_URL=https://espacio-raku.com
        │
        ▼
Docker build argument
        │
        ▼
VITE_SITE_URL environment variable
        │
        ▼
Vite creates the normal production bundle
        │
        ├── adds canonical and social URLs
        ├── creates robots.txt
        └── creates sitemap.xml
        │
        ▼
scripts/prerender.mjs renders <App /> on the build machine
        │
        ▼
The rendered markup replaces <div id="root"></div>
        │
        ▼
Nginx serves complete, crawlable HTML
        │
        ▼
The browser hydrates that HTML and enables interactions
```

The server is not rendering React for every visitor. Rendering happens once during the
build, so production remains a simple static Nginx site.

## 3. How the chosen domain moves through the build

### Deployment command

The production deployment should include the chosen domain:

```bash
GCP_PROJECT=your-google-cloud-project \
CLOUD_RUN_REGION=us-central1 \
SITE_URL=https://espacio-raku.com \
./scripts/deploy-cloud-run.sh
```

For a local production build, use:

```bash
SITE_URL=https://espacio-raku.com npm run build
```

### `scripts/deploy-cloud-run.sh`

The deploy script forwards `SITE_URL` to Docker:

```bash
--build-arg "SITE_URL=${SITE_URL:-}"
```

This does not hard-code the domain into the source code. The same image-building process
can be used for another environment by passing another origin.

### `Dockerfile`

The build stage receives the Docker argument and exposes it to Vite:

```dockerfile
ARG SITE_URL
ENV VITE_SITE_URL=$SITE_URL
```

`ARG` receives the value while Docker is building. `ENV` makes it visible to the Vite
process running `npm run build`.

### `vite.config.js`

Vite reads either `VITE_SITE_URL` or `SITE_URL`:

```js
const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || env.SITE_URL);
```

The URL validator makes sure the value:

- uses `http` or `https`;
- does not contain a path;
- does not preserve a query string or fragment;
- does not produce accidental double slashes.

With the chosen value, the normalized site origin is:

```text
https://espacio-raku.com
```

## 4. Metadata added to the page

### `index.html`

This file now provides metadata before React starts.

#### Language

```html
<html lang="es-AR">
```

This tells browsers and search engines that the page uses Argentine Spanish.

#### Search result title

```html
<title>Cabañas en Chacras de Coria, Mendoza | Espacio Raku</title>
```

This describes the category, location, and brand in a short title. Google may rewrite a
title when it believes another wording answers a search better, but this is the preferred
title supplied by the site.

#### Search result description

```html
<meta
  name="description"
  content="Cabañas, lofts y departamento para alojamiento temporario en Chacras de Coria, Luján de Cuyo, Mendoza. Piscina y reserva directa por WhatsApp."
/>
```

The description summarizes the real offering. It is written for people, not as a list of
repeated keywords.

#### Crawler instructions

```html
<meta
  name="robots"
  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
/>
```

This allows indexing and link discovery. It also permits search engines to show large
image previews and useful-length snippets.

#### Social previews

Open Graph metadata is used by services such as Facebook and WhatsApp. Twitter/X has its
own compatible card metadata. The title and description are present directly in
`index.html`.

The values that require an absolute public URL are injected by `vite.config.js` during a
domain-aware production build:

```html
<meta property="og:url" content="https://espacio-raku.com/">
<meta
  property="og:image"
  content="https://espacio-raku.com/assets/photos/hero-piscina.jpg"
>
<meta
  name="twitter:image"
  content="https://espacio-raku.com/assets/photos/hero-piscina.jpg"
>
```

Absolute URLs matter because social platforms fetch the image from outside the website.

#### Canonical URL

The build injects:

```html
<link rel="canonical" href="https://espacio-raku.com/">
```

The canonical URL tells search engines which URL represents the preferred copy of the
home page. DNS and Cloud Run should redirect other versions, such as HTTP or `www`, to
this chosen HTTPS, non-`www` version.

#### Hero-image preload

```html
<link
  rel="preload"
  as="image"
  href="/assets/photos/hero-piscina.jpg"
  fetchpriority="high"
/>
```

The hero is the largest image visible when the page opens. Preloading tells the browser
to discover it early rather than waiting for the rest of the page to be processed. This
can improve Largest Contentful Paint, which is an important page-experience measurement.

## 5. On-page wording and semantic structure

SEO is not only metadata. Search engines primarily need useful visible content.

### `src/components/Hero.jsx`

The main heading is now:

```text
Cabañas y alojamiento en Chacras de Coria, Mendoza
```

There is exactly one `<h1>` on the page. It clearly establishes the page topic without
trying to fit every search variation into one sentence.

The supporting copy adds “lofts,” “departamento,” “Luján de Cuyo,” and “hospedaje” in a
natural context.

The hero background was also changed from a CSS background to a real `<img>` element.
That allows it to have:

- useful alternative text;
- real width and height attributes;
- high fetch priority;
- better discovery by browsers and image search.

### `src/components/AboutSection.jsx`

The introduction now explains that the property is temporary accommodation in Chacras de
Coria, within Luján de Cuyo. This provides geographic context in normal prose.

### `src/components/AccommodationsSection.jsx`

The section introduces the category as “Cabañas y alojamientos” while accurately naming
the actual units as two lofts and one department. It also uses “hospedaje” and “alquiler
temporario” once in explanatory copy.

This distinction is deliberate: the page can answer searches for cabañas without
renaming every individual unit incorrectly.

### `src/components/LocationSection.jsx`

The location section connects all three geographic levels:

```text
Chacras de Coria → Luján de Cuyo → Mendoza
```

This helps a search engine understand that the property can be relevant to searches using
the neighborhood, department, or province/city name.

### `src/components/Footer.jsx`

The footer repeats a short business-and-location summary because it is useful context at
the end of the page. Its column headings changed from `<h4>` to `<h2>` so the document no
longer jumps directly from heading level two to level four.

The visual size did not change; `src/styles.css` now styles `.foot-col h2` instead of
`.foot-col h4`.

### `src/data/faq.js`

A new visible FAQ explains exactly what kinds of accommodation are offered and their
capacities. The same source data is used for both the page accordion and the structured
FAQ data, reducing the chance that the two versions drift apart.

## 6. Structured data

### `src/components/SeoStructuredData.jsx`

This component creates JSON-LD. JSON-LD is machine-readable information inside a normal
HTML `<script type="application/ld+json">` element. It does not execute JavaScript.

The component produces one graph with two entries.

### `LodgingBusiness`

The lodging entry tells search engines that Espacio Raku is an accommodation business and
provides:

- business name and description;
- WhatsApp telephone number;
- locality, region, and country;
- geographic coordinates;
- Google Maps link;
- Instagram and Facebook profiles;
- number of accommodation units;
- amenities;
- the individual lofts and department with their occupancy.

This information is generated from the existing `site`, `amenities`, and `accommodations`
data files instead of being copied manually into several places.

### `FAQPage`

The FAQ entry maps each visible question to its visible answer:

```js
{
  '@type': 'Question',
  name: item.question,
  acceptedAnswer: {
    '@type': 'Answer',
    text: item.answer,
  },
}
```

Structured data does not guarantee a special search-result presentation. Its purpose is
to make the page meaning less ambiguous and give eligible search systems consistent
business information.

### `src/App.jsx`

`<SeoStructuredData />` is mounted once near the top of the application. Because the app
is prerendered, the final JSON-LD is already present in the first HTML response.

## 7. How prerendering works

### `src/entry-server.jsx`

This is the build-time React entry point:

```jsx
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
```

`renderToString` turns the initial React component tree into an HTML string. It does not
start a permanent application server.

### `scripts/prerender.mjs`

After Vite finishes its normal build, this script:

1. opens `dist/index.html`;
2. loads `src/entry-server.jsx` through Vite so JSX and imports work;
3. calls `render()` to get the page HTML;
4. finds `<div id="root"></div>`;
5. replaces it with `<div id="root">...rendered page...</div>`;
6. saves the completed file;
7. closes the temporary Vite process.

The temporary Vite server uses middleware mode and disables WebSockets because it only
needs module transformation. It does not need a development server or hot reloading.

If the empty root marker cannot be found, the script fails the build. This is intentional:
silently shipping an unprerendered page would hide a regression.

### `package.json`

The build command changed from:

```json
"build": "vite build"
```

to:

```json
"build": "vite build && node scripts/prerender.mjs"
```

The `&&` means prerendering starts only if the Vite build succeeds. If either part fails,
the overall production build fails.

### `src/main.jsx`

The browser chooses between hydration and a normal client render:

```jsx
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
```

In production, the root already contains the prerendered page, so `hydrateRoot` attaches
React behavior to the existing HTML instead of creating it again.

During local development, the root can still be empty, so `createRoot` renders the app in
the original client-only way.

## 8. Generated crawler files

### `robots.txt`

With `SITE_URL=https://espacio-raku.com`, the build generates:

```text
User-agent: *
Allow: /

Sitemap: https://espacio-raku.com/sitemap.xml
```

This allows crawling and points crawlers to the sitemap.

### `sitemap.xml`

The site currently has one public page, so the generated sitemap contains one URL:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://espacio-raku.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

If real routed pages are added later, each indexable canonical page should be added to the
sitemap.

## 9. What happens when `SITE_URL` is missing

The build still succeeds for local development. It still includes:

- the title and description;
- visible SEO copy;
- prerendered HTML;
- structured data;
- a basic `robots.txt`.

It deliberately does not emit:

- a placeholder canonical URL;
- an absolute social image URL;
- `sitemap.xml`;
- a sitemap reference in `robots.txt`.

Publishing a false domain is worse than omitting those values. Production deployment
should therefore always set:

```text
SITE_URL=https://espacio-raku.com
```

## 10. Every changed file and its role

| File | What changed | Why it matters |
| --- | --- | --- |
| `Dockerfile` | Accepts `SITE_URL` and exposes it as `VITE_SITE_URL` | Makes the chosen domain available during the image build |
| `README.md` | Documents the production URL input | Prevents deployments from forgetting canonical/sitemap configuration |
| `index.html` | Adds language, SEO/social metadata, robots policy, and hero preload | Gives crawlers and social platforms immediate page information |
| `package.json` | Runs prerendering after Vite | Ensures every production build contains rendered HTML |
| `scripts/deploy-cloud-run.sh` | Forwards `SITE_URL` as a Docker build argument | Connects deployment configuration to the frontend build |
| `scripts/prerender.mjs` | Inserts rendered React markup into `dist/index.html` | Removes the empty-HTML limitation of the SPA |
| `specs/02-seo-discoverability-copy/implementation-plan.md` | Records completed work and the production URL follow-up | Keeps the implementation plan aligned with reality |
| `src/App.jsx` | Adds the structured-data component | Includes business and FAQ JSON-LD in the page |
| `src/components/AboutSection.jsx` | Adds natural accommodation and location context | Supports relevant local searches in useful prose |
| `src/components/AccommodationsSection.jsx` | Clarifies cabañas, lofts, department, lodging, and temporary rental | Connects search terminology to the real offering |
| `src/components/Footer.jsx` | Adds local summary and fixes heading levels | Reinforces context and improves document semantics |
| `src/components/Hero.jsx` | Improves H1/copy and turns the hero into a prioritized real image | Defines the page topic and improves image/LCP handling |
| `src/components/LocationSection.jsx` | Connects Chacras de Coria, Luján de Cuyo, and Mendoza | Improves geographic meaning |
| `src/components/SeoStructuredData.jsx` | Adds LodgingBusiness and FAQPage JSON-LD | Gives machines consistent business information |
| `src/data/faq.js` | Adds the accommodation-type FAQ | Answers a useful customer and search question |
| `src/entry-server.jsx` | Provides the build-time React renderer | Converts the initial app into an HTML string |
| `src/main.jsx` | Hydrates rendered HTML or falls back to client rendering | Keeps production interactive and development simple |
| `src/styles.css` | Styles the real hero image and corrected footer headings | Preserves the design after semantic changes |
| `vite.config.js` | Validates the origin and generates canonical/social/robots/sitemap assets | Centralizes domain-dependent technical SEO |

## 11. How to verify the production build

Build with the selected domain:

```bash
SITE_URL=https://espacio-raku.com npm run build
```

Confirm the canonical URL:

```bash
grep 'rel="canonical"' dist/index.html
```

Expected result:

```html
<link rel="canonical" href="https://espacio-raku.com/">
```

Confirm the page was prerendered:

```bash
grep '<h1>' dist/index.html
```

The result should contain the real H1, not only an empty root element.

Inspect crawler files:

```bash
cat dist/robots.txt
cat dist/sitemap.xml
```

Finally, run the standard build without suppressing output:

```bash
npm run build
```

It should finish without errors. The domain-aware command above should be used for the
actual production image.

## 12. What this commit cannot guarantee

Technical and on-page SEO make the site easier to crawl, understand, and present. They do
not guarantee first position for a competitive search.

After `https://espacio-raku.com` is live, the operational SEO work should include:

1. redirecting HTTP and `www` to `https://espacio-raku.com/`;
2. verifying the domain in Google Search Console;
3. submitting `https://espacio-raku.com/sitemap.xml`;
4. keeping the Google Business Profile name, phone, category, and location consistent;
5. obtaining genuine reviews and relevant local mentions or links;
6. monitoring indexed pages, search queries, mobile experience, and Core Web Vitals;
7. updating copy when the accommodation offering or policies change.

The commit provides the technical foundation. Search visibility still grows through a
combination of correct deployment, consistent business information, useful content, local
reputation, and time.
