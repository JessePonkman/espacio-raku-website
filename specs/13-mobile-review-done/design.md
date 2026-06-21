# Mobile review — Design

## Status

Implemented and validated in headless Chrome. A real-device spot check remains before
production rollout.

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

## Resolved responsive decisions

- The supported minimum viewport width is 320 px.
- The primary navigation collapses at 840 px; section grids stack or become horizontal,
  scroll-snap carousels at 760 px.
- Calendar and map embeds stay inside their containers and retain loading/fallback states.
- Motion is effectively disabled when `prefers-reduced-motion: reduce` is active.

## Acceptance criteria

- No horizontal page overflow at supported widths.
- Calendar remains within the viewport.
- WhatsApp stays accessible without covering content.
- Text, controls, cards, and footer remain readable and operable.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
