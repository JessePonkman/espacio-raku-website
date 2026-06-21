# Experiences — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 9 of `espacio-raku-next-demo-points.md`.

## Goal

Keep seasonal experiences attractive and flexible while clearly distinguishing confirmed offerings from possibilities still awaiting client/provider approval.

## Experience requirements

- Replace Judit-only wording with a plural expression such as “te acompañaremos.”
- Retain the “experiencias de temporada” framing.
- Improve CTA contrast, including a white background treatment where required.
- Do not present wine tasting, yoga, massage, digitopuntura, or other experiences as confirmed until approved.
- Keep content data-driven without requiring a CMS.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Final experience titles, descriptions, and providers.
- One generic versus experience-specific WhatsApp message.
- Availability labels and individual/group organization.

## Acceptance criteria

- Only confirmed experiences appear as active offerings.
- Availability CTA is legible in every state.
- Content can be updated without restructuring the section.
- Plural host wording is used.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
