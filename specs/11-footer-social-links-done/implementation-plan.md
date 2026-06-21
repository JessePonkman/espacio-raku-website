# Footer and social links — Implementation Plan

## Status

Implemented on 2026-06-20. Pending review in the next demo.

## Confirmed contact data

- Instagram: `https://www.instagram.com/espacio_raku/`
- Facebook: `https://www.facebook.com/juditraku/`
- WhatsApp: `+54 9 2615 78-0242` (stored as `5492615780242` for `wa.me` links)
- Email remains omitted because no approved address was provided.
- External contact links open in a new tab with safe `rel` attributes and an accessible label that announces the behavior.

## Proposed sequence

1. Collect and manually verify destination URLs.
2. Agree on contact hierarchy and email visibility.
3. Implement semantic footer/link markup.
4. Apply visible hover/focus states and safe external-link behavior.
5. Test every destination on desktop and mobile.

## Validation plan

- Link audit for profile ownership and WhatsApp number.
- Keyboard/focus and screen-reader label check.
- Mobile spacing and tap-target review.

## Delivery checklist

- [x] Required client decisions are recorded.
- [x] Content and assets are approved and traceable to their source.
- [x] Desktop and mobile states are implemented together.
- [x] Accessibility checks cover semantics, focus, labels, and contrast.
- [x] External links/embeds have a safe fallback.
- [x] Acceptance criteria in `design.md` are demonstrated.
- [x] `npm run build` succeeds after implementation.
- [ ] The action point is reviewed in the next demo before production rollout.

## Risks

- Missing client decisions can lead to rework or inaccurate public claims.
- Hard-coded content can drift between sections; use a single source of truth.
- Visual approval with placeholder content may not hold once real copy/assets arrive.
- External platforms may introduce loading, privacy, or mobile behavior outside the site's control.

## Rollback approach

Keep the current working presentation available until this action point passes its acceptance checks. Implement in an isolated section/component boundary so it can be reverted without affecting unrelated page content.
