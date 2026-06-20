# Header and hero — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Final hero wording
- Approved WhatsApp number/message convention

## Proposed sequence

1. Audit current desktop and mobile hero against the source acceptance criteria.
2. Agree on logo sizing, copy placement, and contrast strategy.
3. Implement semantic header/hero markup and CTA integration.
4. Tune responsive layout and image focal position.
5. Run accessibility and viewport checks.

## Validation plan

- Visual review at 320, 375, 768, 1024, and 1440 px widths.
- Contrast check over the actual image.
- Keyboard focus and WhatsApp link verification.

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
