# SEO and discoverability copy — Implementation Plan

## Status

Pending discussion and approval. This plan intentionally does not implement the action point.

## Preconditions

- Client terminology decisions
- Final production URL before canonical/social metadata is finalized

## Proposed sequence

1. Inventory current headings and indexable copy.
2. Map each priority phrase to one relevant page area.
3. Draft human-first Spanish copy and metadata.
4. Review terminology with Judit.
5. Implement semantic markup and perform a final repetition/readability pass.

## Validation plan

- Read the full page aloud for naturalness.
- Confirm one H1 and logical heading order.
- Inspect rendered title/description and verify claims against client-approved facts.

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
