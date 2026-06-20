# FAQ — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 12 of `espacio-raku-next-demo-points.md`.

## Goal

Provide short, practical answers to recurring guest questions without introducing unnecessary friction or contradicting other sections.

## Experience requirements

- Set check-in to 14:00 and check-out to 11:00.
- Cover availability, direct WhatsApp coordination, pet policy, pool seasonality, long-stay cleaning, location/shops, and experience availability as approved.
- Keep answers concise.
- Coordinate cleaning language with the services decision.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Final pet-friendly policy wording.
- Whether long-stay cleaning appears here, services, or both.
- Which questions are truly frequent enough to include.
- Accordion versus always-visible presentation.

## Acceptance criteria

- Check-in/out times are correct everywhere.
- FAQ answers do not conflict with services, calendar, or location copy.
- Content is concise and usable with keyboard and screen readers.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
