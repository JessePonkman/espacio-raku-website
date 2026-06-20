# Availability calendar — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Google Calendar embed access
- Platform calendar URLs
- Alquiler Argentina capability confirmation

## Proposed sequence

1. Confirm calendar ownership, visibility, and sync sources.
2. Document the external calendar synchronization flow.
3. Design ready, missing-access, and failure states.
4. Implement a responsive embed and WhatsApp fallback.
5. Test privacy, mobile behavior, and external-link boundaries.

## Validation plan

- Test with real calendar permissions in a private browser.
- Verify no Booking link appears in the user journey.
- Check narrow viewports, embed loading failure, and keyboard navigation.

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
