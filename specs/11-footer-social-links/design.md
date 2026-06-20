# Footer and social links — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 13 of `espacio-raku-next-demo-points.md`.

## Goal

Keep the footer clean and branded while providing verified social links and preserving WhatsApp as the primary contact path.

## Experience requirements

- Add verified Instagram and Facebook links.
- Keep a prominent WhatsApp contact action.
- Avoid distracting users toward secondary channels.
- Decide whether email is omitted.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Final Instagram and Facebook URLs.
- Whether email or any additional contact detail is displayed.
- Whether social links open a new tab and how that behavior is communicated.

## Acceptance criteria

- All external links resolve to the correct profiles/contact.
- WhatsApp remains visually primary.
- Footer is readable, keyboard accessible, and visually restrained.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
