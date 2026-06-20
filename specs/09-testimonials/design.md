# Testimonials — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 11 of `espacio-raku-next-demo-points.md`.

## Goal

Add authentic social proof in a visually calm format that respects guest privacy and works with an initial set of three to five reviews.

## Experience requirements

- Support 3–5 representative testimonials initially.
- Allow text cards, approved screenshots, or a carousel depending on the selected format.
- Preserve authenticity without visual clutter.
- Respect name and screenshot privacy choices.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Text cards versus screenshots versus carousel.
- Which testimonials are approved.
- Full, shortened, or anonymized guest names.
- Whether source/platform attribution is shown.

## Acceptance criteria

- Every published testimonial has client approval.
- Names and screenshots follow the agreed privacy treatment.
- The section remains readable and calm on mobile.
- Carousel controls are accessible if used.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
