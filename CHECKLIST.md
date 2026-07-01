# SEO + Performance Optimization Checklist

Source report: `seo/reports/seo-analysis.html`  
Baseline from Lighthouse report: Performance 67, Accessibility 96, Best Practices 79, SEO 100.

> Note: the embedded Google Calendar is crucial and should remain available. Calendar-related third-party cookie warnings are treated as an accepted tradeoff unless we find a replacement that preserves the same user value.

## 1. Optimize images and responsive delivery

- [x] Convert key JPG/PNG assets to modern formats such as WebP and/or AVIF.
- [x] Generate responsive image sizes for hero, accommodation cards, carousel images, and section images.
- [x] Update the hero/LCP image to use the smallest appropriate high-priority source.
- [x] Add `srcset` and `sizes` where images are displayed at different viewport widths.
- [x] Keep the hero image eager/high-priority; keep below-the-fold images lazy-loaded.
- [x] Replace oversized logo PNG usage with smaller exported assets or SVG where practical.
- [x] Add explicit `width` and `height` to image elements that are currently unsized.

## 2. Add compression and cache headers

- [x] Add a custom Nginx configuration for the production container.
- [x] Enable text compression for HTML, CSS, JS, SVG, JSON, XML, and font files.
- [x] Set short/revalidating cache headers for `index.html`.
- [x] Set long-lived cache headers for hashed build assets.
- [x] Decide how to version optimized image assets before applying long-lived image cache headers.
- [x] Re-run Lighthouse to confirm `Enable text compression` and `Use efficient cache lifetimes` improve.

## 3. Reduce render-blocking fonts and CSS

- [x] Audit which Google Font families and weights are actually used.
- [x] Remove unused font families/weights from the Google Fonts request.
- [x] Consider self-hosting the required WOFF2 font files.
- [x] Preload the most important above-the-fold font file if self-hosted.
- [x] Review whether critical above-the-fold CSS should be inlined or otherwise prioritized.
- [x] Re-run Lighthouse to confirm FCP and render-blocking request savings improve.

## 4. Fix accessibility and polish issues

- [x] Fix color contrast issues for eyebrow labels, accent text, links, footer text, and muted copy.
- [x] Keep the visual brand palette, but use darker text-safe variants where needed.
- [x] Fix the Google Maps link accessible-name mismatch.
- [x] Add missing explicit dimensions to logo/image elements flagged by Lighthouse.
- [x] Re-run Lighthouse to confirm Accessibility improves from 96 toward 100.

## Validation result

Final local production Docker Lighthouse run:

- URL tested: `http://127.0.0.1:5173/`
- Fetch time: `2026-06-30T22:09:14.601Z`
- Performance: **94**
- Accessibility: **100**
- Best Practices: **79**
- SEO: **100**
- FCP: **1.9 s**
- LCP: **2.9 s**
- TBT: **10 ms**
- CLS: **0**

Notes:

- `http://127.0.0.1:5173/` was used instead of `http://localhost:5173/` because another local Node process was listening on IPv6 `::1:5173`; Docker was serving the production Nginx container on IPv4 `127.0.0.1:5173`.
- Best Practices remains limited by the embedded Google Calendar third-party cookie warning, which is accepted because the calendar is crucial.
- Remaining render-blocking CSS and minor image-compression suggestions are non-blocking because Performance is above the 90+ target.
