# Availability calendar — Design

## Status

Planning only. No implementation is authorized by this document.

## Source

Derived from section 6 of `espacio-raku-next-demo-points.md`.

## Goal

Show availability inside the website without sending guests to Booking, while keeping the operational calendar setup maintainable by Judit.

## Experience requirements

- Embed a Google Calendar or show an intentional placeholder until access is ready.
- Treat the calendar as informational; inquiries remain WhatsApp-first.
- Do not expose a direct Booking CTA.
- Support responsive mobile rendering.
- Investigate iCal synchronization for Booking, Airbnb, and Alquiler Argentina.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Decisions to close before implementation

- Calendar owner and sharing permissions.
- Whether only blocked dates or additional labels are visible.
- Whether Alquiler Argentina provides compatible iCal feeds.
- Fallback behavior if the embed is unavailable.

## Acceptance criteria

- Calendar or approved placeholder is visible and understandable.
- Embed does not overflow on mobile.
- No primary path redirects to Booking.
- The next setup action is clear when external credentials/URLs are missing.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
