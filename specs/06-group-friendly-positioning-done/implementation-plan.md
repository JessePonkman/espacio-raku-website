# Group-friendly positioning — Implementation Plan

## Status

Implemented on 2026-06-21. Pending review in the next demo.

## Confirmed inputs

- Combined maximum: up to 9 people, including an extra bed.
- Placement: after accommodations and before availability.
- Visual treatment: typography-only cream/teal feature panel.
- Accommodation capacities remain 2, 2, and up to 4 people per unit.

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
- Review the centered desktop panel and full-width mobile CTA in the next demo.

## Validation results

- Production build completed successfully on 2026-06-21.
- Group CTA URL round-trips the approved accented message and editable placeholders.
- Page composition places the panel directly between accommodations and availability.
- Relevant foreground/background contrast ratios are at least 5.31:1, and the CTA has an explicit keyboard focus outline.
- The CTA expands to the panel width at mobile breakpoints without changing desktop sizing.
- No accommodation capacity, group photo, child-policy copy, or header link was introduced.

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
