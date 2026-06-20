# Accommodation cards and detail path — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Client verification of names, photos, and amenities
- Routing/detail-view decision
- Shared WhatsApp URL builder

## Proposed sequence

1. Create a verified content matrix for all units.
2. Agree on the card/detail information split.
3. Model accommodation data separately from presentation.
4. Implement reusable cards and the selected detail behavior.
5. Connect unit-specific messages and validate all content.

## Validation plan

- Cross-check every field with Judit-approved data.
- Open each detail path and WhatsApp link.
- Test galleries, cards, and long amenity lists on mobile.

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
