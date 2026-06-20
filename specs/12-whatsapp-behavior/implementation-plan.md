# WhatsApp behavior across the site — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Client number and wording approval
- Accommodation/experience stable ids
- Analytics choice if tracking is added

## Proposed sequence

1. Inventory every current conversion link.
2. Define one canonical configuration and contextual message map.
3. Implement reusable URL encoding and CTA presentation.
4. Replace section-specific hard-coded links.
5. Test destinations, messages, focus states, and mobile overlap.

## Validation plan

- Automated/manual inventory confirms no Booking CTA.
- Open every message variant on a real mobile flow.
- Check encoding for accents, spaces, and unit names.

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
