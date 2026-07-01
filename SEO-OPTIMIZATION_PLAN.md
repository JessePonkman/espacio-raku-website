# SEO Optimization Plan

## Context

The current Lighthouse report in `seo/reports/seo-analysis.html` shows:

- **SEO:** 100
- **Performance:** 67
- **Accessibility:** 96
- **Best Practices:** 79

The SEO fundamentals are already strong. The practical next step is to improve search-adjacent quality signals: load speed, Core Web Vitals, accessibility, and production delivery.

The embedded Google Calendar is considered business-critical. This plan does **not** remove it. Calendar-related third-party cookie warnings may remain an accepted Best Practices tradeoff unless a replacement preserves the same booking/disponibilidad value.

## Goals

1. Improve mobile Lighthouse Performance, especially LCP.
2. Reduce total network payload.
3. Add production compression and effective cache headers.
4. Reduce render-blocking font/CSS impact.
5. Improve Accessibility from 96 toward 100 without changing the brand feel.

## Non-goals

- Do not remove the Google Calendar availability experience.
- Do not redesign the site.
- Do not change SEO copy/metadata unless a later audit identifies a real SEO gap.
- Do not prioritize Lighthouse score-chasing over conversion-critical UX.

## Baseline findings

### Performance

Key report findings:

- Largest Contentful Paint: **14.7s**
- First Contentful Paint: **3.5s**
- Speed Index: **3.6s**
- Total Blocking Time: **10ms**
- Cumulative Layout Shift: **0.01**

Interpretation:

- JavaScript execution is not the main issue.
- Layout stability is already good.
- The main bottleneck is delivery of large visual assets and render-blocking resources.

### Largest Contentful Paint

The LCP element is the hero image:

```text
Piscina y jardín de Espacio Raku en Chacras de Coria
```

Lighthouse attributes most of the LCP time to image load time. The hero image is already marked high priority, so the next improvements should focus on serving a smaller, optimized version to each device.

### Large image assets

Assets flagged by Lighthouse include:

- `/assets/photos/hero-piscina.jpg`
- `/assets/photos/jardin-pileta.jpg`
- `/assets/photos/cabana1-sala.jpg`
- `/assets/photos/cabana2-cama.jpg`
- `/assets/photos/cabana3-exterior.jpg`
- `/assets/brand/logo-color.png`
- `/assets/brand/logo-blanco.png`

The logos are especially oversized for their rendered dimensions.

### Production delivery

The report flags:

- missing/inefficient cache lifetimes
- missing text compression
- render-blocking CSS and Google Fonts

The production image currently uses default Nginx behavior, so a custom Nginx config is likely needed.

### Accessibility

Accessibility is strong but not perfect:

- 23 color contrast issues
- one accessible-name mismatch for the Google Maps link
- unsized logo images

## Phase 1 — Image optimization

### Recommended approach

Add an image optimization pipeline that generates:

- AVIF and/or WebP versions
- multiple responsive widths
- smaller logo files
- stable, versioned filenames where long cache lifetimes are needed

### Hero image

Recommended hero changes:

- Serve AVIF/WebP when supported.
- Keep a JPG fallback.
- Use responsive widths, for example mobile/tablet/desktop variants.
- Keep `fetchpriority="high"`.
- Keep the hero image eager, not lazy-loaded.
- Ensure the preload points to the same optimized source the browser will actually use.

### Below-the-fold images

Recommended section image changes:

- Add `srcset` and `sizes`.
- Keep `loading="lazy"`.
- Consider `decoding="async"`.
- Use dimensions that match card/carousel display sizes.

### Logos

Recommended logo changes:

- Export much smaller logo assets for header, hero, and footer use.
- Prefer SVG if source quality allows it.
- Otherwise generate appropriately sized PNG/WebP variants.
- Add explicit `width` and `height` attributes wherever missing.

### Acceptance criteria

- LCP image transfer size is substantially reduced.
- Total page weight drops significantly from the current multi-megabyte baseline.
- Lighthouse no longer flags the same image savings at the current severity.

## Phase 2 — Compression and cache headers

### Recommended approach

Add a custom Nginx config and copy it into the production Docker image.

### Compression

Enable gzip for:

- `text/html`
- `text/css`
- `application/javascript`
- `application/json`
- `application/xml`
- `image/svg+xml`
- font MIME types where applicable

Optional later enhancement:

- precompress assets during build if Brotli/gzip static serving becomes worthwhile.

### Cache policy

Recommended policy:

- `index.html`: `no-cache` or short cache with revalidation.
- hashed Vite assets: long cache, `immutable`.
- optimized images: long cache only if filenames are versioned or content-hashed.
- unversioned public assets: either version them first or use a safer shorter cache policy.

### Acceptance criteria

- Lighthouse no longer reports major text-compression savings.
- Lighthouse reports efficient cache lifetimes for static assets.
- Deployments do not get stuck serving stale HTML.

## Phase 3 — Fonts and render-blocking CSS

### Font audit

Current font loading includes multiple Google Font families and weights. Audit actual usage before making changes.

Questions to answer:

- Is `Courgette` used in visible UI?
- Which `Cormorant Garamond` weights/styles are actually needed?
- Which `Inter` weights are actually needed above the fold?

### Recommended options

Option A — lighter Google Fonts request:

- Remove unused families and weights.
- Keep `display=swap`.
- Keep existing preconnect hints.

Option B — self-host critical fonts:

- Download only required WOFF2 files.
- Serve them from the same origin.
- Add long-lived cache headers.
- Preload the most important above-the-fold font.

Option C — CSS prioritization:

- Review whether the small amount of critical hero/header CSS should be inlined.
- Keep the full stylesheet external for maintainability unless Lighthouse gains justify the complexity.

### Acceptance criteria

- Render-blocking request savings are reduced.
- FCP improves from the current 3.5s baseline.
- Visual identity remains consistent.

## Phase 4 — Accessibility and polish

### Color contrast

Review and adjust text colors used for:

- `.eyebrow`
- `.accent`
- orange text links
- muted paragraph text on tinted backgrounds
- footer copyright and footer links
- map/card caption links

The goal is not to remove the brand colors, but to avoid using lighter accents as body text when contrast is insufficient.

### Accessible names

Fix the Google Maps link mismatch by making the accessible name include the visible text:

```text
Ver en Google Maps
```

The label can still add extra context after that text if needed.

### Image dimensions

Add missing dimensions to logo images and any other images Lighthouse flags.

### Acceptance criteria

- Accessibility improves from 96 toward 100.
- Color contrast issues are cleared or significantly reduced.
- The Google Maps accessible-name mismatch is resolved.

## Validation plan

1. Run a production build.
2. Verify the generated `dist/` output.
3. Build and run the production container locally if possible.
4. Check response headers for compression and cache behavior.
5. Re-run Lighthouse against the deployed production URL.
6. Compare against the baseline report.

Suggested target outcomes:

- Performance: 90+ if image and delivery changes are effective.
- LCP: under 2.5s on Lighthouse mobile if feasible.
- Accessibility: 100 or near 100.
- SEO: remain 100.
- Best Practices: improve where possible, with Google Calendar treated as an accepted exception if still flagged.

## Risks and tradeoffs

### Image pipeline complexity

Responsive images improve performance but add build and maintenance complexity. Keep the pipeline simple and documented.

### Cache invalidation

Long cache lifetimes are safe only when asset filenames change with content. Avoid long immutable caching for unversioned assets unless the deployment process guarantees cache busting.

### Font changes

Reducing fonts can improve speed but may alter the visual identity. Audit before removing.

### Calendar warnings

The Google Calendar iframe may keep Best Practices from reaching 100. Because the calendar is crucial, preserve the feature and accept the warning unless a better UX-equivalent alternative is found.

## Proposed implementation order

1. Add image optimization pipeline and update image usage.
2. Add production Nginx compression/cache configuration.
3. Reduce or self-host fonts.
4. Fix accessibility polish issues.
5. Re-run Lighthouse and document the before/after results.
