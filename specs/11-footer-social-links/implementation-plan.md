# Footer and social links — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Client-provided social URLs
- Global WhatsApp configuration

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
