# Mobile review — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

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

## Delivery checklist

- [ ] Required client decisions are recorded.
- [ ] Content and assets are approved and traceable to their source.
- [ ] Desktop and mobile states are implemented together.
- [ ] Accessibility checks cover semantics, focus, labels, and contrast.
- [ ] External links/embeds have a safe fallback.
- [ ] Acceptance criteria in `design.md` are demonstrated.
- [ ] `npm run build` succeeds after implementation.
- [ ] The action point is reviewed in the next demo before production rollout.

## Risks

- Missing client decisions can lead to rework or inaccurate public claims.
- Hard-coded content can drift between sections; use a single source of truth.
- Visual approval with placeholder content may not hold once real copy/assets arrive.
- External platforms may introduce loading, privacy, or mobile behavior outside the site's control.

## Rollback approach

Keep the current working presentation available until this action point passes its acceptance checks. Implement in an isolated section/component boundary so it can be reverted without affecting unrelated page content.
