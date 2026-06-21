# Mobile review — Implementation Plan

## Status

Implemented and validated in headless Chrome on 2026-06-21. Real-device and external
slow-network spot checks remain pending before production rollout.

## Preconditions

- All section-level changes sufficiently complete for integrated review
- Real calendar/media/social content

## Proposed sequence

1. Define viewport, browser, and interaction test matrix.
2. Run section-by-section responsive review from smallest width upward.
3. Fix overflow, cropping, content order, and tap-target issues.
4. Test embeds, carousels, floating CTA, focus, and reduced motion.
5. Repeat an integrated mobile demo pass after all fixes.

## Validation plan

- Manual checks at 320, 375, 390, 430, and 768 px widths.
- Portrait/landscape and real-device spot check.
- Keyboard, touch, reduced-motion, and slow-network checks.

## Validation results

- Passed portrait checks at 320, 375, 390, 430, and 768 px without page-level horizontal
  overflow.
- Passed landscape checks at 568×320, 667×375, and 844×390; the mobile menu scrolls in
  short viewports so every item remains reachable.
- Confirmed the collapsed navigation is fully hidden and non-interactive; the open menu
  contains the `Consultar` CTA and closes with Escape while returning focus to its toggle.
- Confirmed calendar, map, floating WhatsApp, accommodation details, and experience details
  stay within the viewport.
- Confirmed key controls provide 44 px touch targets and reduced-motion removes continuous
  animation and smooth scrolling.
- Completed a section-by-section visual pass at 320 px, including footer and social links.
- `npm run build` succeeds.
- Pending: real-device portrait/landscape spot check and throttled external embed behavior.

## Delivery checklist

- [x] Required client decisions are recorded.
- [ ] Content and assets are approved and traceable to their source.
- [x] Desktop and mobile states are implemented together.
- [ ] Accessibility checks cover semantics, focus, labels, and contrast.
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
