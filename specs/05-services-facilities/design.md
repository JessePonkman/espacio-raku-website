# Services and facilities — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 7 of `espacio-raku-next-demo-points.md`.

## Goal

Present attractive facilities accurately without implying a heated pool or daily hotel-style cleaning.

## Experience requirements

- Describe the pool as seasonal/summer use.
- Do not promise daily cleaning; mention mid-stay cleaning only for stays longer than 7 days if approved.
- Add asador and fogonero.
- Include relevant exterior facilities such as garden, parking, pool, and chulengo/asador.
- Consider a photo carousel without making content inaccessible.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Preferred terms: asador, parrilla, chulengo, or a combination.
- Whether cleaning belongs here, in FAQ, or only in direct conversation.
- Whether fogonero is generally available or requires coordination.
- Carousel versus static grid.

## Acceptance criteria

- No copy implies heated/year-round pool access.
- No copy implies daily cleaning.
- Asador/fogonero are visible and accurately qualified.
- Facilities remain understandable without interacting with a carousel.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
