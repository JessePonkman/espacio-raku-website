# FAQ — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Pet policy confirmation
- Cleaning placement decision
- Approved availability/calendar language

## Proposed sequence

1. Build a single fact-checked question inventory.
2. Remove duplicates and prioritize practical questions.
3. Choose semantic static or accordion presentation.
4. Implement data-driven FAQ content.
5. Cross-check facts and structured-data suitability before release.

## Validation plan

- Search the whole site for outdated 15:00/other check-in times.
- Keyboard/screen-reader check if accordion is used.
- Client fact-check of policy answers.

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
