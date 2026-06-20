# Group-friendly positioning — Structure

## Status

Proposed implementation structure for discussion; files and components listed here have not been created yet.

## Current integration boundary

The current React/Vite site is concentrated in `src/App.jsx` with global presentation in `src/styles.css`. During implementation, this action point may first be integrated there, then extracted only where reuse or complexity justifies it.

## Proposed UI slices

- Group positioning content block
- Optional group image
- Link to accommodations
- Group-specific WhatsApp CTA

## Content/data model

- Approved combined-capacity wording
- Short supporting paragraph
- Optional image and alt text
- Group inquiry message

Content should live in a single source of truth rather than being repeated across JSX blocks. External URLs, contact details, and status labels should be configuration/data, not scattered literals.

## Asset needs

- Client-provided group photo if approved; otherwise reuse an appropriate property image

## Suggested code boundaries

- `src/App.jsx` — page composition and section placement.
- `src/styles.css` — shared tokens and responsive rules until extraction is justified.
- `src/components/` — reusable interactive or repeated UI, introduced only when needed.
- `src/data/` or `src/content/` — fact-checked structured content if the action point contains repeated/editable records.
- `src/lib/` — pure URL/configuration helpers if shared behavior is required.
- `public/` or an agreed asset directory — optimized approved media.

## Dependencies and interfaces

- Exact capacity confirmation
- Placement and photo decisions
- Accommodation data accuracy

## Constraints

- Do not duplicate factual values across sections.
- Keep external embeds and links replaceable through configuration.
- Preserve useful fallback content when images, embeds, or optional records are missing.
- Avoid adding a new dependency unless native React/CSS is insufficient and the tradeoff is approved.
