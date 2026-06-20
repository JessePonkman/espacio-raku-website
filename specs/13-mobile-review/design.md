# Mobile review — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 15 of `espacio-raku-next-demo-points.md`.

## Goal

Treat mobile quality as a cross-cutting release gate for the revised demo rather than a final cosmetic check.

## Experience requirements

- Review header/logo, hero readability, floating WhatsApp, accommodation cards, calendar, services carousel, experience CTAs, and footer/social links.
- Prevent horizontal overflow and broken sections.
- Keep text readable and touch targets usable.
- Ensure the calendar and floating actions work at narrow widths.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Supported minimum viewport width.
- Breakpoint strategy and whether any layouts require content reordering.
- How carousels/embeds degrade when space or motion is constrained.

## Acceptance criteria

- No horizontal page overflow at supported widths.
- Calendar remains within the viewport.
- WhatsApp stays accessible without covering content.
- Text, controls, cards, and footer remain readable and operable.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
