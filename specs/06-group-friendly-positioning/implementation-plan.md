# Group-friendly positioning — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Exact capacity confirmation
- Placement and photo decisions
- Accommodation data accuracy

## Proposed sequence

1. Confirm combined-capacity language and constraints.
2. Select the highest-value page placement.
3. Draft copy that explains multi-unit coordination.
4. Implement the content block and inquiry CTA.
5. Validate that nearby unit cards preserve per-unit clarity.

## Validation plan

- Ask a reviewer to state individual versus combined capacity after reading.
- Verify no child-policy copy was introduced.
- Test group CTA prefilled message.

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
