# WhatsApp behavior across the site — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 14 of `espacio-raku-next-demo-points.md`.

## Goal

Establish one consistent, measurable, WhatsApp-first conversion path across all relevant sections without sending users to Booking.

## Experience requirements

- Provide WhatsApp actions in hero, accommodation cards/details, availability, floating control, and footer.
- Use readable, consistent CTA styling.
- Support generic, unit-specific, experience-specific, and group messages as approved.
- Mention the website in prefilled messages if Judit chooses that convention.
- Keep the phone number and URL construction centralized.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Canonical WhatsApp number.
- Generic versus contextual message templates.
- Whether every message mentions the website.
- Floating button visibility/overlap rules.

## Acceptance criteria

- No main CTA routes to Booking.
- Every WhatsApp link uses the correct number and encoded message.
- CTA labels and visual treatment are consistent and accessible.
- Floating action does not cover content on mobile.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
