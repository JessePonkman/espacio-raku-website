# Group-friendly positioning — Design

## Status

Implemented on 2026-06-21. Pending review in the next demo.

## Source

Derived from section 8 of `espacio-raku-next-demo-points.md`.

## Goal

Make multi-unit stays for couples, friends, and groups commercially visible without confusing group capacity with individual-unit capacity.

## Experience requirements

- Mention that groups can coordinate multiple spaces for a combined stay.
- Surface the group message before the bottom of the page.
- Keep individual capacity figures attached to their respective units.
- Do not proactively mention the summer restriction around children.

## Design principles

- Preserve Espacio Raku's warm, calm, direct-booking identity.
- Prefer clear factual content over marketing claims that have not been confirmed.
- Keep WhatsApp as the primary conversion path where a contact action is needed.
- Design desktop and mobile states together, including loading, missing-content, and error states where relevant.
- Use semantic, keyboard-accessible interactions and sufficient visual contrast.

## Confirmed decisions

- Present a combined maximum of up to 9 people by coordinating several accommodations.
- Clarify that maximum capacity includes an extra bed and is confirmed when arranging the stay.
- Place a dedicated group panel immediately after accommodations and before availability.
- Use a typography-only cream/teal treatment without a photo or header navigation link.
- Address couples and friends with a dedicated WhatsApp inquiry path.

## Approved copy

- Eyebrow: “ESTADÍAS EN GRUPO”.
- Heading: “Juntos, con espacio para cada uno”.
- Body: “Ya sea en pareja o con amigos, pueden compartir Espacio Raku coordinando varios alojamientos dentro del complejo. Recibimos grupos de hasta 9 personas, manteniendo la comodidad e independencia de cada espacio.”
- Capacity note: “La capacidad máxima contempla una cama adicional y se confirma al coordinar la estadía.”
- CTA: “Consultar para un grupo”.

## Acceptance criteria

- Group capability is visible before the footer.
- Users cannot mistake total property capacity for one unit's capacity.
- Copy is inviting and avoids unrequested restrictive messaging.

## Out of scope for this action point

- Production deployment and SEO rollout.
- A CMS or administrative interface unless separately approved.
- Unverified client content, external credentials, or platform integrations.
