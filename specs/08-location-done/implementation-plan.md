# Location — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Client privacy decision
- Approved Google Maps location/embed
- Verified nearby-place claims

## Proposed sequence

1. Confirm address disclosure level and map pin.
2. Fact-check location and nearby shopping copy.
3. Design loaded, placeholder, and failure states.
4. Implement responsive map and semantic supporting content.
5. Test mobile behavior and external-link handling.

## Validation plan

- Client review of privacy and accuracy.
- Open map in desktop/mobile contexts.
- Test embed failure and viewport overflow.

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
