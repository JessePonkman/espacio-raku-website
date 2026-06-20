# Experiences — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Final content from Judit
- Provider confirmation
- Shared WhatsApp link behavior

## Proposed sequence

1. Separate confirmed, tentative, and unavailable experience records.
2. Agree on card states and WhatsApp message granularity.
3. Create the reusable data shape and presentation.
4. Apply accessible high-contrast CTA styles.
5. Populate only approved content and test state changes.

## Validation plan

- Client confirmation of every published experience.
- Contrast and keyboard checks for buttons/statuses.
- Mobile review with missing images and long descriptions.

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
