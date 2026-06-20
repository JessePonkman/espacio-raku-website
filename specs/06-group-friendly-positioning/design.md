# Group-friendly positioning — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 8 of `espacio-raku-next-demo-points.md`.

## Goal

Make multi-unit stays for couples, friends, and groups commercially visible without confusing group capacity with individual-unit capacity.

## Experience requirements

- Mention that groups can coordinate multiple spaces for a combined stay.
- Surface the group message before the bottom of the page.
- Keep individual capacity figures attached to their respective units.
- Do not proactively mention the summer restriction around children.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Final wording: up to 8, up to 8–9, or inquire for groups.
- Placement in hero, accommodation intro, experiences intro, or a dedicated group card.
- Whether an approved group photo is available.

## Acceptance criteria

- Group capability is visible before the footer.
- Users cannot mistake total property capacity for one unit's capacity.
- Copy is inviting and avoids unrequested restrictive messaging.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
