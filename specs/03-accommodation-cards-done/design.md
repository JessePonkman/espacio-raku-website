# Accommodation cards and detail path — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 5 of `espacio-raku-next-demo-points.md`.

## Goal

Represent every unit accurately and make its differences, capacity, amenities, and WhatsApp inquiry path easy to understand.

## Experience requirements

- Correct the image 1/image 3 association.
- Set apartment capacity to up to 4 people.
- Assign living propio and cocina equipada to the apartment, and kitchenette to cabins/lofts.
- Keep card amenities concise and move complete information to a detail view or section.
- Provide unit-specific WhatsApp messages.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Approved unit names and classification.
- CTA wording: Ver más, Ver alojamiento, or Conocer este espacio.
- Detail route versus in-page detail section.
- Whether pool access appears in each card or only in shared facilities.

## Acceptance criteria

- No unit has a mismatched photo, capacity, or amenity.
- Differences between apartment and cabins/lofts are understandable.
- Each unit exposes a clear detail path and unit-specific WhatsApp inquiry.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
