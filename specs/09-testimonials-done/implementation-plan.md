# Testimonials — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Testimonials from Judit
- Guest privacy approval
- Format decision

## Proposed sequence

1. Collect and record approval/privacy status for candidate reviews.
2. Choose a format based on content quality and quantity.
3. Model reviews independently from layout.
4. Implement cards or an accessible carousel.
5. Verify transcription, attribution, and mobile density.

## Validation plan

- Compare displayed wording with approved source material.
- Check screenshot readability and accessible alternatives.
- Test keyboard/swipe behavior if carousel controls exist.

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
