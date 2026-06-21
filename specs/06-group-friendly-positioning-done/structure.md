# Group-friendly positioning — Structure

## Status

Implemented on 2026-06-21. Pending review in the next demo.

## Current integration boundary

`GroupStaySection` is an isolated static section rendered by `src/App.jsx` after accommodations and before availability. Its presentation remains in the shared stylesheet, matching the current React/Vite architecture.

## Proposed UI slices

- Typography-only group positioning panel
- Combined-capacity clarification
- Group-specific WhatsApp CTA

## Content/data model

- Approved content object in `src/data/groupStay.js`
- Group inquiry message in the centralized WhatsApp message map

Content should live in a single source of truth rather than being repeated across JSX blocks. External URLs, contact details, and status labels should be configuration/data, not scattered literals.

## Asset decision

No image is used. The approved treatment relies on typography, color, spacing, and the existing button system.

## Suggested code boundaries

- `src/App.jsx` — page composition and section placement.
- `src/components/GroupStaySection.jsx` — semantic group panel and CTA.
- `src/data/groupStay.js` — approved, fact-checked section content.
- `src/utils/whatsapp.js` — encoded group inquiry message.
- `src/styles.css` — responsive cream/teal panel presentation.

## Dependencies and interfaces

- Maximum capacity of 9 includes an extra bed and requires coordination.
- Individual accommodation capacity labels remain unchanged.
- WhatsApp remains the primary conversion interface.

## Constraints

- Do not duplicate factual values across sections.
- Keep external embeds and links replaceable through configuration.
- Preserve useful fallback content when images, embeds, or optional records are missing.
- Avoid adding a new dependency unless native React/CSS is insufficient and the tradeoff is approved.
