# SEO and discoverability copy — Implementation Plan

## Status

Implemented on 2026-06-21. The final production URL remains a deployment input so canonical,
social image, and sitemap URLs are never published with a placeholder domain.

## Preconditions

- Client terminology decisions: use “cabañas” as a category phrase while keeping the
  specific units described accurately as two lofts and one departamento.
- Final production URL: provide it through `SITE_URL` during the production build.

## Proposed sequence

1. [x] Inventory current headings and indexable copy.
2. [x] Map each priority phrase to one relevant page area.
3. [x] Draft human-first Spanish copy and metadata.
4. [x] Confirm “cabañas,” “alojamiento,” and “hospedaje” as target terminology.
5. [x] Implement semantic markup and perform a final repetition/readability pass.
6. [x] Prerender the React page so meaningful content and structured data ship in HTML.
7. [x] Generate robots, sitemap, canonical, and social URL metadata from `SITE_URL`.

## Validation plan

- Read the full page aloud for naturalness.
- Confirm one H1 and logical heading order.
- Inspect rendered title/description and verify claims against client-approved facts.

## Delivery checklist

- [x] Required client decisions are recorded.
- [x] Content and assets are approved and traceable to their source.
- [x] Desktop and mobile states are implemented together.
- [x] Accessibility checks cover semantic headings and image labels.
- [x] External links/embeds retain their safe fallback.
- [x] Acceptance criteria in `design.md` are demonstrated.
- [x] `npm run build` succeeds after implementation.
- [ ] Set the real `SITE_URL`, deploy, and review the action point before production rollout.

## Risks

- Missing client decisions can lead to rework or inaccurate public claims.
- Hard-coded content can drift between sections; use a single source of truth.
- Visual approval with placeholder content may not hold once real copy/assets arrive.
- External platforms may introduce loading, privacy, or mobile behavior outside the site's control.

## Rollback approach

Keep the current working presentation available until this action point passes its acceptance checks. Implement in an isolated section/component boundary so it can be reverted without affecting unrelated page content.
