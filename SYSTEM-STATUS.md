# gessese.com — system migration status

_Last updated 18 Sep 2026. Branch `system`, local only, **uncommitted, not pushed**._

Start a new Claude chat with the gessese folder connected and `npm run dev` running,
then say: **"read SYSTEM-STATUS.md and pick up where we left off."**

## What this branch is
gessese.com migrated from the Feb 2026 "silk in the wind" design (Cormorant / DM Sans /
cream / mauve orb) to the Selam Gessese system. The full system lives outside the repo:

- `~/Downloads/selam-gessese-system/DESIGN-SYSTEM.md` + `tokens.css` — the philosophy, tokens, invariants
- `~/Downloads/selly-says-brand/SELLY-SAYS-BRAND.md` — the Substack room (Montagu Slab wordmark, #C8102E)
- Published references: System v1, In Use, Pairing, full Design System artifacts on claude.ai

## Tokens (src/app/globals.css)
paper #FFFFFF · ink #0F1115 · slate #5B6472 · line #E4E7EB · mist #F1F4F7 · assassin #C30D2A
dark: paper #0C0E12 · ink #EDEFF2 · slate #8D96A4 · line #232832 · mist #141821 · assassin #F04A62
Legacy names (--cream, --accent, --ink-muted, --font-cormorant, --font-dm-sans) still alias to the new ones.

## Fonts (src/app/layout.tsx, next/font/google)
- `--font-display` Bodoni Moda, variable, opsz axis on (auto by size) — titles, room labels, nav-less wordmark
- `--font-util` Archivo — nav, dates, labels, ≤14px, and the nav name (500, .2em, caps)
- `--font-read` Spectral — essay bodies, About/Work paragraphs, descriptions
- Montagu Slab was tried for the nav and removed. Playfair is the **book** face only, not on the site.

## Invariants applied
I. one assassin red per view (nav active link is exempt as wayfinding)
II. dates set left, letterspaced caps
III. cool neutrals carry structure (no warm grounds; heat only in photographs, and only blurred/motion)
IV. big display, then a hard stop — hairlines, not panels. No orb.

## Pages — state
| page | state |
|---|---|
| **Home** `/` | Done. Big name "Selam Gessese" (Bodoni, clamp 2.6–8.6rem) → ink rule with `software engineer · writer · music producer` left and red Bloom line right → Gran Canaria photograph (`/photos/bay.jpg`) → rooms in a fixed 2-col grid (`.rooms-grid`), 6th cell = most recent post. |
| **Music** `/music` | Done pending links. Rule → band (80vh): words in left ~46%, `/photos/heat.jpg` absolute from `left:32%` with mask `transparent 0 → .08 @3% → .45 @13% → black @27%`. Order: title, Listen (Spotify embed), platform links. `SPOTIFY_ARTIST` deliberately **blank** for now; artist id is `2gFPvQNmJ6DibLblyWrM2e` when wanted. Other platform URLs still generic. |
| **Bloom** `/becoming` | Redesigned light. Rule (`a poetry collection` / `2018 — 2026`), title italic left, excerpt in Spectral right, Preorder row. Route stays `/becoming`. Title was "Becoming"; now **Bloom**; alt title under consideration: "I mistook your distance for love". |
| **Writing** `/writing` | Migrated, index widened to 900px, descriptions in Spectral. Not redesigned. Idea: point this at Substack (sellysays) and pull latest via RSS. |
| **Essay** `/writing/[slug]` | Migrated. 720px container (~65ch), date in red, title opsz 36 (slightly sturdier hairlines — she may prefer auto), gap under title 2.5rem. |
| **Work** `/work` | Migrated only. Roles de-redded, dates moved left above titles. **Next to redesign — together with the résumé.** |
| **About** `/about` | Migrated only. Empty photo slot (mist box) — Needle or crossing photo intended. Copy says "Bloom". |

## Photos (public/photos/)
bay.jpg (Gran Canaria — home) · heat.jpg (music) · crossing.jpg (1st & Stewart, Seattle) · needle.jpg (Space Needle) · blur.jpg (unused)

## Open items
- Work page + résumé redesign (same system)
- About photo
- Mobile pass — nothing checked below desktop width
- Essay title hairline: opsz 36 vs auto — her call
- Bad slug on `/writing/[slug]` throws instead of 404 (pre-existing; add `notFound()`)
- Commit + push `system` → Vercel preview URL

## To discard everything
`git checkout main && git branch -D system` (photos in public/photos are untracked; delete by hand)
