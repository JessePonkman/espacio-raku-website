# Location — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 10 of `espacio-raku-next-demo-points.md`.

## Goal

Answer practical location questions while balancing useful proximity information with the client's preferred level of address privacy.

## Experience requirements

- Mention Rodríguez Viñedo, the tranquil residential setting, shopping/commercial access, and nearby supermarket/supply options.
- Show a Google Map embed or an intentional placeholder.
- Use accurate Chacras de Coria/Mendoza context.
- Avoid exposing the exact address if Judit prefers an area-only reference.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Exact address versus approximate area pin.
- Approved map location/embed.
- Final proximity claims and wording.

## Acceptance criteria

- The section answers whether food/supplies are available nearby.
- Map or placeholder is visible and responsive.
- All location claims are accurate and respect the chosen privacy level.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
