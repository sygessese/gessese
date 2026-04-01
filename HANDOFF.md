# gessese.com v2 — Project Handoff Document

**Last updated:** 2026-02-28 (session 3)
**Prepared for:** Selam Gessese, any AI session continuing this work, or any engineer picking this up
**Status:** Site deployed on Vercel. Live at `gessese.com` (Vercel). Two open PRs: PR #1 (initial build) and PR #4 (mobile + comments + analytics). Current working branch: `ship/2026-02-28-initial-build`.

---

## 1. Project Overview

### Who the site is for
Selam Gessese — poet, musician, writer, and software engineer based in Seattle, WA. The site is her personal creative hub and public identity, not a corporate or agency site.

### Core purpose
Consolidate all of Selam's creative output (poetry, music, writing, professional background) under one domain she owns and controls. Replace a 2019 Gatsby engineering portfolio that no longer reflected who she is.

### Primary goals
- **Brand:** Establish Selam's identity as a creative — poet, musician, writer — not a software engineer
- **Publishing pipeline:** Enable frequent, low-friction content publishing (write a markdown file locally, push to GitHub, post is live)
- **Creative hub:** House the *Becoming* poetry collection preorder, published music, essays/brain dumps, and professional background
- **Version control:** Experiment-branch workflow so site iterations can be previewed and approved before merging
- **Technical:** Modern, maintainable stack that Selam can operate without a developer
- **Engagement:** Enable reader interaction via comments on writing posts
- **Analytics:** Track visitor behavior and conversion actions (nav clicks, section door clicks, music link clicks, preorder clicks, comment submissions)

### Target audience
Social media followers, readers, music fans, literary community — not engineering recruiters. The old site was built for engineering companies. This site is not.

### Conversion goals (in rough priority order)
1. Drive preorders for *Becoming* (poetry collection, not yet published)
2. Drive music streams (Spotify and other platforms)
3. Build readership for writing (essays, brain dumps on /writing)
4. Establish credibility/context for professional contacts via /work

---

## 2. Original Vision and Preferences

### Aesthetic / emotional direction
- **Primary metaphor:** "Silk in the wind" — airy, light, drifting, never static
- Spacious. Clean structure. Overwhelming visual noise was an explicit concern
- Timeless over trendy. Should not look dated in 5 years
- "Minimalism with character and style"
- Cinematic quality, especially for the *Becoming* page
- References given by Selam (in order of influence):
  1. Editorial magazine layouts (clean editorial grid)
  2. W Magazine (editorial photography + typography-forward)
  3. Monolit studio site (spacious, structural, confident typography)
  4. Future app (for the purple orb concept — ambient animated background element)

### What she explicitly did NOT want
- Engineering portfolio aesthetic (project cards, skills bars, recruiter-facing layout)
- Dense information. Anything that creates visual overwhelm
- Trendy UI patterns that will look dated
- A CMS or database she has to maintain (chose markdown files over Sanity)
- Auto-merging experiments to main (wants approval gate via PR)

### Content philosophy
- Audience is social media followers and creative community, not tech companies
- Blog content: "brain dumps" — short essays, musings, stream-of-consciousness
- Prefers writing locally in markdown and pushing to publish rather than using a web editor
- *Becoming* is a current creative priority — the poetry collection needs a preorder page

### Layout preferences
- Single landing page with "section doors" (links to each area) rather than everything on one scrollable page
- Clean serif-led typography with a DM Sans utility font for metadata/labels
- Hairline borders as structural elements (not cards, not heavy boxes)
- Active nav link highlighted in accent color (`--accent: #C4A0BC`)

---

## 3. Information Architecture

### Full sitemap (current)

```
/                           Landing page
/writing                    Post index
/writing/[slug]             Individual post (with comments section)
/becoming                   Poetry collection (preorder shell)
/music                      Music / streaming platforms
/work                       Resume (experience, education, projects, skills)
/about                      Bio + contact links
/api/posts                  GET — all posts metadata (internal Next.js API)
/api/posts/[slug]           GET — single post with full content (internal Next.js API)
/api/comments               POST — create a new comment (Supabase-backed)
/api/comments/[slug]        GET — fetch all comments for a post (Supabase-backed)
```

### Navigation structure
Fixed top bar with frosted glass background (`rgba(249,247,244,0.85)` + `backdrop-filter: blur(12px)`), two zones:
- **Left:** "SELAM GESSESE" — wordmark in Cormorant Garamond, links to `/`. On mobile (below 640px), name stacks into two lines: "Selam" / "Gessese"
- **Right:** four links in DM Sans — writing, music, becoming, about. On mobile, links become a horizontally scrollable row with fade masks on edges

**Confirmed: `/work` is NOT in the nav.** This is intentional. The creative audience is not the engineering audience. `/work` is accessible from the home section doors and via direct URL only.

### Nav CSS classes (defined in `globals.css`)
| Class | Purpose |
|---|---|
| `.site-nav` | Fixed nav container — `position: fixed; z-index: 50; backdrop-filter: blur(12px)` |
| `.nav-name` | Wordmark link — Cormorant Garamond, 1.1rem desktop, 0.85rem mobile |
| `.nav-name-full` | Single-line "Selam Gessese" — visible on desktop, hidden on mobile |
| `.nav-name-stacked` | Stacked two-line "Selam" / "Gessese" — hidden on desktop, visible on mobile |
| `.nav-links` | `<ul>` link container — flexbox row, 2.5rem gap desktop, scrollable on mobile |
| `.nav-link` | Individual link — DM Sans 0.75rem, lowercase, transition on color |

Mobile breakpoint is `@media (max-width: 640px)`. Mobile styles include:
- Nav padding: `0.75rem 0 0.75rem 1.25rem`
- Links gap reduced to `1.5rem`
- Links get `overflow-x: auto` with `-webkit-overflow-scrolling: touch`
- Scrollbar hidden via `scrollbar-width: none` and `::-webkit-scrollbar { display: none }`
- Fade masks via `mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)`
- Link `<li>` items get `flex-shrink: 0`

### Pages — section breakdown

#### `/` — Home
| Section | Purpose |
|---|---|
| SilkOrb (background) | Ambient animated gradient — three independent orbs (rose-quartz, peach, lilac) drifting and blending, 50% size to reveal background, aria-hidden |
| Name (`h1`) | "Selam" + italic "Gessese" at display scale — primary identity statement |
| Identity line | "POET . MUSICIAN . WRITER" — defines audience expectations before anything else |
| Section doors | Five hairline-bordered links: Writing, Music, Becoming, Work, About. Hover reveals `->` in accent. Each click tracked via `track("section_door_click", { section })` |

Section door data (from `sections` array in `page.tsx`):
1. Writing — "essays . musings . brain dumps"
2. Music — "streaming everywhere"
3. Becoming — "a poetry collection . preorder now"
4. Work — "things i've built"
5. About — "the person behind the work"

#### `/writing` — Post index
| Section | Purpose |
|---|---|
| Page heading | "Writing" (display serif) + subtitle "ESSAYS . MUSINGS . BRAIN DUMPS" |
| Post list | Fetched from `/api/posts`, rendered as hairline rows: date, italic title, description |

Posts are fetched client-side via `useEffect` -> `fetch('/api/posts')`. This is a deliberate architecture choice (see Infrastructure Notes section).

#### `/writing/[slug]` — Individual post
| Section | Purpose |
|---|---|
| Back link | "<- Writing" — returns to index |
| Date | Full date in DM Sans small caps |
| Title | Italic Cormorant at display scale |
| Body | Paragraphs split on `\n\n`, `---` rendered as `<hr>`. Plain text only -- no markdown link, image, or heading support currently |
| Comments | `<Comments slug={slug} />` component — Supabase-backed. Header says "Thoughts" in italic Cormorant. Shows existing comments with name, date, body. Form with name (required, max 100), email (optional, max 255), body (required, max 5000). "Post" button. Success message "Comment posted." clears after 3 seconds. |

#### `/becoming` — Poetry collection
| Section | Purpose |
|---|---|
| Eyebrow | "A POETRY COLLECTION" in accent color |
| Title | Italic "Becoming" at `clamp(4rem, 12vw, 9rem)` — most dramatic element on the site |
| Author | "SELAM GESSESE" at low opacity (`rgba(249,247,244,0.5)`) |
| Blockquote | Sample line with accent left-border |
| Preorder CTA | Button linking to `#preorder` (anchor placeholder — no preorder system connected yet). Click tracked via `track("preorder_click")` |

Background: dark (`--ink: #1A1A18`) with amber-brown radial gradient orb (`#5C3A1E` to `#3A2010`). This is the only page with a dark background.

#### `/music` — Music
| Section | Purpose |
|---|---|
| Page heading | "Music" + "STREAMING EVERYWHERE" |
| Spotify embed placeholder | `200px` `--accent-light` div — awaiting real Spotify artist embed URL |
| Platform links | Spotify, Apple Music, SoundCloud, YouTube Music, Tidal — all link to platform homepages (not Selam's artist page yet). Arrow uses text variation selector: `{"\\u2197\\uFE0E"}`. Each click tracked via `track("music_link_click", { platform })` |

#### `/work` — Resume
| Section | Purpose |
|---|---|
| Page heading | "Work" + "EXPERIENCE . EDUCATION . PROJECTS" |
| Experience | ACLU of Washington (2018-19, Public Relations), City of Seattle (2018-19, Community Ambassador) |
| Education | Hack Reactor (Software Engineering, Dec 2019), University of Washington (BA Political Science, June 2017), Seattle Central College (AA, June 2015) |
| Projects | Twitook (web app), Hungry (iOS mobile app) — reduced from original 4; Selam trimmed to 2 |
| Skills | Languages, Frameworks, Databases, Tools — two-column grid (`120px 1fr`) |

Animation on this page uses `fadeUp` with `y: 20 -> 0` (not `x: 40` — note: in the current code, the work page uses the same `y` direction as other pages, with `duration: 0.7` and `ease: "easeInOut"`). Selam previously modified the animation style on this page.

#### `/about` — Bio
| Section | Purpose |
|---|---|
| Page heading | "About" |
| Two-column layout | Left: `3/4` aspect ratio photo placeholder (`--accent-light`). Right: three body paragraphs in Cormorant italic + DM Sans |
| Links row | GitHub, LinkedIn, Email — hairline-bordered row at bottom. Arrow uses text variation selector: `{"\\u2197\\uFE0E"}`. Each click tracked via `track("about_link_click", { link })` |

Link destinations:
- GitHub: `https://github.com/sygessese`
- LinkedIn: `https://linkedin.com/in/sygessese`
- Email: `mailto:sygessese@gmail.com`

Current bio text is placeholder that was written during the build session. Selam needs to replace with her own words.

---

## 4. Visual and Design System

### Typography

| Role | Font | Variable | Weights | Style |
|---|---|---|---|---|
| Display / headings | Cormorant Garamond | `var(--font-cormorant)` | 300, 400, 500, 600 | normal + italic |
| UI / body / metadata | DM Sans | `var(--font-dm-sans)` | 300, 400, 500 | normal only |

Both fonts loaded via `next/font/google` in `layout.tsx` and injected as CSS variables on the `<html>` element. Never import from `@next/font` directly in page components -- always reference `var(--font-cormorant)` and `var(--font-dm-sans)`.

**Usage rules:**
- Cormorant Garamond: all `h1`, `h2`, display text, post titles, blockquotes, body copy in long-form reading contexts, comment body text
- DM Sans: nav links, metadata, dates, labels, subtitles, button text, skills grid values, descriptions, comment names, form inputs, form button
- `fontWeight: 300` is the default body weight for DM Sans -- use 400 for nav links, 500 sparingly (comment author names use 500)
- Italic Cormorant is used for: last name on homepage, post titles, blockquotes, *Becoming* title, about bio opening paragraph, "Thoughts" comment section heading

**Fluid sizing pattern:**
```css
fontSize: "clamp(3rem, 7vw, 5.5rem)"   /* page headings */
fontSize: "clamp(3.5rem, 9vw, 7.5rem)" /* home h1 */
fontSize: "clamp(4rem, 12vw, 9rem)"    /* Becoming title */
fontSize: "clamp(1.1rem, 2vw, 1.3rem)" /* post body */
fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" /* resume h2 */
fontSize: "clamp(2.2rem, 5vw, 3.5rem)" /* individual post title */
fontSize: "clamp(1.5rem, 3vw, 2rem)"   /* post list title */
fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" /* section door label */
```

**Metadata / label pattern:**
```
fontFamily: DM Sans
fontSize: 0.65rem-0.75rem
letterSpacing: 0.1em-0.2em
textTransform: uppercase
color: var(--ink-muted)
```

### Color palette

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#F9F7F4` | Page background (all pages except /becoming) |
| `--ink` | `#1A1A18` | Primary text, headings, borders base color |
| `--ink-muted` | `#6B6B68` | Secondary text, metadata, labels, descriptions |
| `--accent` | `#C4A0BC` | Active nav link, role labels, hover states, CTA button background, link underlines, left-border on blockquote, scrollbar thumb, "Comment posted" success text |
| `--accent-light` | `#E8DFE8` | Placeholder backgrounds (photo, Spotify embed), text selection background |
| `--orb-1-center` | `#DDB8CC` | Orb 1 (Rose Quartz) core primary color |
| `--orb-1-blend` | `#D4A878` | Orb 1 secondary blend color |
| `--orb-1-outer` | `#E8D8E4` | Orb 1 halo color |
| `--orb-2-center` | `#E8A878` | Orb 2 (Peach) core primary color |
| `--orb-2-blend` | `#D4956A` | Orb 2 secondary blend color |
| `--orb-2-outer` | `#F0C4A0` | Orb 2 halo color |
| `--orb-3-center` | `#C8B0D4` | Orb 3 (Lilac) core primary color |
| `--orb-3-blend` | `#A898B8` | Orb 3 secondary blend color |
| `--orb-3-outer` | `#D8C8E0` | Orb 3 halo color |

`/becoming` uses `--ink` as background with cream text — the only inverted page.

Borders: `rgba(26,26,24,0.1)` — derived from `--ink` at 10% opacity. Used consistently for all hairline dividers. Comment form inputs use `rgba(26,26,24,0.12)`. Comment dividers use `rgba(26,26,24,0.06)`.

Error text color: `#c44` (used in comment form error state).

**Orb color variables:** Named by structure (center/blend/outer), not color. This allows colors to be changed in `globals.css` without variable names becoming misleading. VS Code shows color previews on hover.

**CSS variables defined in:** `src/app/globals.css`
**Tailwind token aliases defined in:** `globals.css` under `@theme inline {}` (Tailwind v4 syntax)

### Spacing system
No formal spacing scale. All spacing is inline via `style={}`. Common patterns in use:

- Page top padding: `10rem` (inner pages) to `8rem` (home, /becoming)
- Content max-width: `720px` (most pages), `640px` (post body, /becoming content), `680px` (home)
- Section gap (hairline rows): `padding: "2.5rem 0"` or `"2rem 0"`
- Bottom page padding: `6rem-8rem`
- Nav padding: `1.5rem 2.5rem` desktop, `0.75rem 0 0.75rem 1.25rem` mobile
- Comments section: `marginTop: "6rem"`, `paddingTop: "3rem"` above border

### Grid system
No CSS grid framework. Layout uses:
- Flexbox column for all page content stacks
- `display: grid; gridTemplateColumns: "120px 1fr"` for skills rows
- `display: grid; gridTemplateColumns: "1fr 2fr"` for about page photo/bio
- `display: flex; justifyContent: space-between` for title + date/type label rows
- `display: flex; gap: "1rem"; flexWrap: "wrap"` for comment form name/email row (each input `flex: "1 1 200px"`)

### Component patterns

**Hairline row:** `borderTop: "1px solid rgba(26,26,24,0.1)"`, `padding: "2.5rem 0"`. Used on: home section doors, writing post list, work resume rows, music platform list, about links row.

**Section label:** DM Sans, 0.65rem, 0.2em letter spacing, uppercase, `--ink-muted`, `paddingTop: 4rem`. Used in /work to separate EXPERIENCE / EDUCATION / PROJECTS / SKILLS.

**Accent link:** `color: var(--accent)`, `borderBottom: "1px solid var(--accent)"`, `textTransform: uppercase`, `letterSpacing: 0.12em`, `fontSize: 0.7rem`. Used for "GitHub ↗", "<- Writing".

**Hover pattern (inline):** All hover states handled via `onMouseEnter`/`onMouseLeave` on the element, updating `style.color` directly. Framer Motion is NOT used for hover states — only for mount animations.

**Arrow emoji fix:** The `↗` arrow on `/music` platform links and `/about` contact links uses the text variation selector `\uFE0E` to prevent emoji rendering. In JSX this appears as `{"↗\uFE0E"}`.

**Comment component:** Section header "Thoughts" in italic Cormorant 1.8rem. Comments listed with name (DM Sans 0.8rem weight 500) + date (DM Sans 0.65rem muted) above body (Cormorant 1.1rem, line-height 1.7). Form inputs have `border: "1px solid rgba(26,26,24,0.12)"`, `borderRadius: "2px"`, transparent background. Submit button: DM Sans 0.7rem, uppercase, 0.15em letter spacing, border-only style.

### Animation philosophy
- **Entry animations only** — elements animate in on page mount, not on scroll (no scroll-triggered animations implemented yet)
- **Framer Motion** for all animations. Pattern: `initial={{ opacity: 0, y: 24 }}`, `animate={{ opacity: 1, y: 0 }}`, staggered via `delay: i * 0.1`
- **Easing:** `"easeInOut" as const` — used consistently everywhere. Originally `[0.22, 1, 0.36, 1]` cubic bezier, refactored to string for Framer Motion v12 compatibility. The `as const` assertion is required for TypeScript strict mode.
- **Duration:** 0.6-1.0s for primary elements, 0.5-0.8s for secondary
- **SilkOrb:** Three Framer Motion `motion.div` elements looping with `repeat: Infinity`, durations of 22s, 26s, 24s. Orb sizes: 340px, 260px, 225px (50% of original). Each orb has core (center + blend colors) and halo (outer color) layers. Values: x/y drift variable (large sweeps, e.g., x: [0, -200, -500, -300, -640, -180, 0]), scale +/-5-18%. `filter: blur(75-100px)`. `pointerEvents: none`, `aria-hidden: true`. Colors defined as CSS variables (`--orb-1-center`, `--orb-1-blend`, etc.).
- **/becoming page orb:** Separate dark-toned orb (`#5C3A1E` to `#3A2010`), 500px, `filter: blur(80px)`, `opacity: 0.7`, 20s loop. Not using SilkOrb component — has its own inline motion.div.
- No page transition animations implemented (each page animates independently on load)

### Accessibility
- `aria-hidden="true"` on SilkOrb and decorative orbs (including stacked name span on mobile)
- `lang="en"` on `<html>`
- `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` on body
- `smooth` scroll behavior on html
- Comment form inputs have `required` attribute where appropriate, `maxLength` constraints
- **Not yet addressed:** keyboard focus styles, skip-nav link, ARIA labels on icon-only links, color contrast audit (accent on cream may be marginal)

### Mobile responsiveness
- `clamp()` used for all major font sizes — text scales with viewport
- `maxWidth` constraints on content (640-720px) with `margin: 0 auto` — works on wide screens
- **Nav is responsive:** Frosted glass background, stacked name on mobile, swipeable link row with fade masks. Styles moved from inline to CSS classes in `globals.css` with `@media (max-width: 640px)` breakpoint
- **Not yet addressed:** padding at mobile breakpoints for page content, SilkOrb orbs overflow on narrow screens, about page grid collapse on small screens
- No Tailwind responsive prefixes used anywhere — all page layout is inline styles, nav is CSS classes

---

## 5. Implementation Details

### Tech stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | 16.1.6 |
| Language | TypeScript | ^5 |
| UI library | React | 19.2.3 |
| Animation | Framer Motion | ^12.34.3 |
| CSS | Tailwind CSS v4 | ^4 |
| Tailwind integration | @tailwindcss/postcss | ^4 |
| Markdown parsing | gray-matter | ^4.0.3 |
| Database client | @supabase/supabase-js | ^2.98.0 |
| Analytics | @vercel/analytics | ^1.6.1 |
| Screenshots (dev tool) | Playwright | ^1.58.2 (devDependencies) |
| Linting | ESLint + eslint-config-next | ^9 / 16.1.6 |
| Node.js | v20.20.0 (via nvm) | required |

### Why this stack was chosen
- **Next.js 16:** App Router enables API routes for the blog system and comments. Serverless-compatible for Vercel deployment. Strong TypeScript support.
- **Framer Motion:** The silk orb animation and staggered entry animations were a core design requirement. CSS-only animation would be insufficient.
- **Tailwind v4:** Chosen for utility availability; however, in practice almost zero Tailwind utilities are used in the current codebase — all styling is inline `style={}` for page components. The nav is the exception, using CSS classes in `globals.css`. The CSS variables defined in globals.css are the real styling system.
- **gray-matter:** Parses YAML frontmatter from `.md` files. Chosen because Selam explicitly chose markdown files over a CMS (Sanity was proposed and declined). Posts live on disk, not in a database.
- **@supabase/supabase-js:** Comments system backend. Chosen for simplicity — free tier, hosted Postgres, row-level security, no server to manage.
- **@vercel/analytics:** Zero-config analytics once deployed to Vercel. Tracks page views automatically. Custom event tracking via `track()` for conversion-relevant actions.
- **No CMS:** Deliberate. Selam wanted to write locally and push to publish. This means blog posts are version-controlled alongside code. Comments are the only data stored externally (Supabase).

**Mode:** Next.js is running in **webpack mode** (not Turbopack). Turbopack crashed in this environment (`Failed to write app endpoint /page`). The `--webpack` flag is set explicitly in `dev.sh`. Do not attempt to enable Turbopack without testing.

### Hosting platform
- **Production:** Vercel — site is deployed and accessible
- **Domain:** `gessese.com` — pointed to Vercel
- **GitHub repo:** `https://github.com/sygessese/gessese` (public)
- **Old site:** `sygessese.github.io` — old Gatsby v2 site, kept as backup, no longer serving `gessese.com`
- **EC2:** To be shut down. Was used for old project demos. Not part of v2 architecture.

### Build system
Standard Next.js build: `next build`. No custom build steps.

The dev server cannot be started with the system `npm` command because the system Node is v15 (set by nvm default alias before this project). A custom `dev.sh` script is required — see dev server section below.

### Third-party integrations (active)

**Supabase (comments backend)**
- Project name: `supabase-selia-row-xo`
- URL: `https://qaghsjxtfpwtazrypzpr.supabase.co`
- Used by: `src/lib/supabase.ts` (client), `src/app/api/comments/route.ts` (POST), `src/app/api/comments/[slug]/route.ts` (GET)
- Table: `comments` (see schema below)
- Authentication: anon key (public, safe for client-side reads). Service role key available but not currently used in code.
- RLS (Row Level Security): Enabled on the `comments` table. Policies allow public reads and inserts.

**Comments table schema:**
| Column | Type | Constraints |
|---|---|---|
| `id` | serial | primary key, auto-increment |
| `post_slug` | varchar(255) | not null — links comment to a blog post |
| `name` | varchar(100) | not null — commenter's display name |
| `email` | varchar(255) | nullable — optional commenter email (not displayed publicly) |
| `body` | text | not null — comment content |
| `created_at` | timestamptz | default now() — when comment was posted |

**Comments API behavior:**
- `GET /api/comments/[slug]` — Returns `id, name, body, created_at` for all comments on that post, ordered ascending by `created_at`. Email is NOT returned to the client.
- `POST /api/comments` — Accepts `{ slug, name, email, body }`. Validates all fields. Sanitizes HTML tags via regex `stripHtml()`. Rate limited to 3 comments per IP per 10 minutes (in-memory `Map`, resets on serverless cold start). Returns 201 on success, 429 on rate limit, 400 on validation error, 500 on Supabase error.

**Vercel Analytics**
- Package: `@vercel/analytics` v1.6.1
- Import: `import { Analytics } from "@vercel/analytics/next"` in `layout.tsx`
- `<Analytics />` component rendered in `<body>` after `{children}` in root layout
- Custom event tracking via `import { track } from "@vercel/analytics"` in client components

**Click tracking events (all via `track()` from `@vercel/analytics`):**
| Event name | Properties | Where |
|---|---|---|
| `nav_click` | `{ link: "home" \| "writing" \| "music" \| "becoming" \| "about" }` | Nav.tsx |
| `section_door_click` | `{ section: "writing" \| "music" \| "becoming" \| "work" \| "about" }` | page.tsx (home) |
| `music_link_click` | `{ platform: "spotify" \| "apple music" \| "soundcloud" \| "youtube music" \| "tidal" }` | music/page.tsx |
| `about_link_click` | `{ link: "github" \| "linkedin" \| "email" }` | about/page.tsx |
| `preorder_click` | (no properties) | becoming/page.tsx |
| `comment_posted` | `{ slug: string }` | Comments.tsx |

**Google Fonts:** Cormorant Garamond + DM Sans via `next/font/google` — loaded server-side, no external network request at render time

**GitHub:** Version control + PR workflow (public repo)

**Playwright:** Used only for screenshot automation in the `/ship` workflow, not at runtime. Listed in `devDependencies`.

### Third-party integrations (placeholder / pending)
- **Spotify:** Embed placeholder exists in `/music/page.tsx`. Awaiting Selam's artist page URL.
- **Apple Music, SoundCloud, YouTube Music, Tidal:** Placeholder links to platform homepages. Awaiting Selam's artist page URLs.
- **Preorder system:** `/becoming` page CTA button links to `#preorder` anchor (no actual system). Needs a real link (Kickstarter, Gumroad, publisher page, etc.)
- **Photos / /snapshots:** A `/snapshots` travel photo gallery route is planned. Images will be stored in `public/photos/` in the repo for now. When the repo grows too large, migrate to Cloudinary free tier (images stay at permanent URLs, Next.js page embeds them).

### Environment variables

**Required in `.env.local` (gitignored) and in Vercel dashboard:**

| Variable | Purpose | Public? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (`https://qaghsjxtfpwtazrypzpr.supabase.co`) | Yes (exposed to browser) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key for client-side reads | Yes (exposed to browser) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key for admin operations | No (server-only, not currently used in code but available) |

These variables MUST be set in the Vercel dashboard under the project's Environment Variables settings, in addition to `.env.local` for local development. Without them, the comments system will fail silently (Supabase client will be initialized with `undefined` values).

### SEO strategy
Current state: minimal.
- `<title>Selam Gessese</title>`
- `<meta name="description" content="Poet. Musician. Writer.">`
- OpenGraph tags: title, description, url (`https://gessese.com`), siteName — set in `layout.tsx`
- No structured data (JSON-LD)
- No sitemap.xml
- No robots.txt
- No canonical URLs
- No per-page metadata overrides (all pages inherit root layout metadata)

### Performance optimization
- Fonts loaded via `next/font/google` — zero layout shift, fonts inlined at build time
- No images in the codebase yet (photo on /about is a `div` placeholder)
- Vercel Analytics is lightweight (~1KB)
- Supabase client loaded only on pages with comments (individual post pages)
- SilkOrb runs on GPU via `filter: blur()` and `transform` — smooth on modern hardware, untested on low-power devices

---

## 6. File Structure

```
/Users/gessese/gessese-v2/
|
+-- dev.sh                          # CRITICAL: dev server launcher (see below)
+-- next.config.ts                  # Empty Next.js config (no customizations)
+-- package.json                    # Dependencies
+-- postcss.config.mjs              # Tailwind v4 PostCSS setup
+-- tsconfig.json                   # TypeScript config (strict mode, @/* path alias)
+-- eslint.config.mjs               # ESLint config (next/core-web-vitals + typescript)
+-- .env.local                      # GITIGNORED — Supabase env vars (see above)
|
+-- public/                         # Static assets served at /
|   +-- file.svg                    # Default Next.js placeholder SVGs (unused)
|   +-- globe.svg
|   +-- next.svg
|   +-- vercel.svg
|   +-- window.svg
|
+-- scripts/
|   +-- screenshot.mjs              # Auto-discovery screenshot script for /ship
|
+-- src/
|   +-- app/                        # Next.js App Router — all routes live here
|   |   +-- layout.tsx              # Root layout: fonts, metadata, <Nav />, <Analytics />, globals.css import
|   |   +-- globals.css             # CSS variables, Tailwind import, global resets, nav CSS classes + mobile media queries
|   |   +-- favicon.ico             # Default Next.js favicon (replace with custom)
|   |   |
|   |   +-- page.tsx                # Route: / (home — SilkOrb + section doors, 5 entries including About)
|   |   +-- about/page.tsx          # Route: /about (with track() on link clicks)
|   |   +-- becoming/page.tsx       # Route: /becoming (with track() on preorder CTA)
|   |   +-- music/page.tsx          # Route: /music (with track() on platform links, arrow emoji fix)
|   |   +-- work/page.tsx           # Route: /work
|   |   |
|   |   +-- writing/
|   |   |   +-- page.tsx            # Route: /writing (post index)
|   |   |   +-- [slug]/page.tsx     # Route: /writing/[slug] (individual post + <Comments /> component)
|   |   |
|   |   +-- api/
|   |       +-- posts/
|   |       |   +-- route.ts        # GET /api/posts — returns all post metadata (strips content)
|   |       |   +-- [slug]/route.ts # GET /api/posts/[slug] — returns post + content
|   |       +-- comments/
|   |           +-- route.ts        # POST /api/comments — create comment (rate limited, sanitized)
|   |           +-- [slug]/route.ts # GET /api/comments/[slug] — fetch comments for a post
|   |
|   +-- components/
|   |   +-- Nav.tsx                 # Fixed top navigation bar (CSS classes, track() on links)
|   |   +-- SilkOrb.tsx             # Three-orb animated background (50% size, CSS variable colors)
|   |   +-- Comments.tsx            # Supabase-backed comment list + form (track() on submit)
|   |
|   +-- content/
|   |   +-- posts/                  # Markdown blog posts — add files here to publish
|   |       +-- on-beginning-again.md          # "On beginning again" (2026-02-10)
|   |       +-- things-im-learning-to-let-be.md # "Things I'm learning to let be" (2026-01-22)
|   |
|   +-- lib/
|       +-- posts.ts                # getAllPosts(), getPostBySlug(), formatDate() — server-only (uses fs)
|       +-- supabase.ts             # Supabase client init (uses NEXT_PUBLIC_SUPABASE_URL + ANON_KEY)
|
+-- .claude/
|   +-- launch.json                 # Claude Preview server config (uses /bin/bash + dev.sh)
|   +-- settings.local.json         # Local Claude permissions
|   +-- commands/
|   |   +-- ship.md                 # /ship slash command instructions
|   +-- ships/
|       +-- 2026-02-28-initial-build.md  # Ship log
|
+-- .pr-assets/
    +-- screenshots/                # Auto-generated page screenshots for PRs
        +-- home.png
        +-- writing.png
        +-- writing__on-beginning-again.png
        +-- writing__things-im-learning-to-let-be.png
        +-- becoming.png
        +-- music.png
        +-- work.png
        +-- about.png
```

### Key file explanations

**`dev.sh`** — The dev server CANNOT be started with a plain `npm run dev` because the system shell resolves `node` to v15 (set by nvm alias before this project). This script sources nvm and invokes node v20 directly with the full binary path, then runs Next.js in webpack mode:
```bash
#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 20 --silent
cd /Users/gessese/gessese-v2
exec /Users/gessese/.nvm/versions/node/v20.20.0/bin/node node_modules/next/dist/bin/next dev --webpack
```
If this file is lost or broken, the dev server will fail with `Cannot find module 'node:path'` because npm's shebang (`#!/usr/bin/env node`) picks up Node v15.

**`.claude/launch.json`** — Configures the Claude Preview tool's dev server. Uses `/bin/bash` as runtimeExecutable with `["dev.sh"]` as runtimeArgs, port 3000. This is working correctly.

**`scripts/screenshot.mjs`** — Walks `src/app` to auto-discover all routes. For static routes (no `[param]`), uses the folder name directly. For dynamic routes (`[slug]`), looks up a resolver in `DYNAMIC_RESOLVERS` to enumerate real values. Currently has one resolver: `/writing/[slug]` reads `src/content/posts/*.md`. Add new resolvers when new dynamic routes are added. Viewport: 1440x900. Waits 1400ms for Framer Motion to settle.

**`src/lib/posts.ts`** — Runs on the server only (Node.js `fs` module). Called by API routes. Reads files from `src/content/posts/`, parses frontmatter with gray-matter, sorts newest-first by `date` frontmatter field. Exports `Post` type: `{ slug, title, date, description, content }`.

**`src/lib/supabase.ts`** — Creates and exports a single Supabase client instance using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables. Used by both comment API routes.

**`src/components/Comments.tsx`** — Client component (`"use client"`). Takes `slug` prop. Fetches comments on mount via `GET /api/comments/${slug}`. Renders comment list and form. Tracks successful comment posts via `track("comment_posted", { slug })`. Manages four states: idle, sending, sent, error.

---

## 7. Deployment Architecture

### Current state (as of 2026-02-28)
- **Site is deployed on Vercel.** `gessese.com` resolves to the Vercel deployment.
- The old Gatsby v2 site at `sygessese.github.io` (GitHub Pages) is still intact as a backup but is no longer served at `gessese.com`.
- Two repos exist:
  - Old: `github.com/sygessese/sygessese.github.io` — do not touch this; it is the safety net
  - New: `github.com/sygessese/gessese` — this is where all v2 work lives

### Domain configuration
- Domain: `gessese.com`
- Registrar: Amazon Route 53
- DNS: Points to Vercel (updated from previous GitHub Pages configuration)

### Vercel project
- Connected to GitHub repo `sygessese/gessese`
- Framework preset: Next.js (auto-detected)
- Environment variables configured: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- Merging to `main` triggers automatic redeploy
- Preview deployments created for PRs

### GitHub repository
- URL: `https://github.com/sygessese/gessese`
- Visibility: **Public**
- Default branch: `main`
- Current branches: `main`, `ship/2026-02-28-initial-build`
- Open PRs: PR #1 (`ship/2026-02-28-initial-build` -> `main`, initial build) and PR #4 (mobile + comments + analytics)

### Branch workflow (experiment model)
- `main` = approved, stable site state. Merging to main triggers Vercel deploy.
- Feature/experiment work goes on named branches
- The `/ship` command creates `ship/YYYY-MM-DD-description` branches
- A GitHub PR is opened for human review before merge
- Selam reviews the PR (with embedded screenshots), approves, merges

### What is static vs dynamic
- **Static:** All UI — home, about, becoming, music, work, writing index, individual post pages. These are React components with no server-side data fetching at render time.
- **Dynamic (runtime):** `/api/posts` and `/api/posts/[slug]` — Next.js API routes that read markdown files from disk at request time using Node.js `fs`.
- **Dynamic (runtime):** `/api/comments` and `/api/comments/[slug]` — Next.js API routes that read/write to Supabase.
- **This means:** The site cannot be exported as a fully static site (`next export`) in its current form. The API routes require a Node.js runtime. **Vercel handles this natively.**

---

## 8. Infrastructure Notes

### Vercel deployment
The site is deployed on Vercel. Vercel runs Next.js API routes as serverless functions. The `fs` calls in `src/lib/posts.ts` read files from `src/content/posts/`. On Vercel, the build output includes these markdown files — they are bundled at build time and accessible to the serverless function at runtime via `process.cwd()`. This works correctly on Vercel without modification.

**Important:** New markdown posts added via git push trigger a Vercel rebuild and redeploy automatically. The post pipeline (write `.md` -> push -> post is live) works as designed.

### Supabase integration
The comments system uses Supabase (project `supabase-selia-row-xo`) as a hosted Postgres database. The Supabase client is initialized in `src/lib/supabase.ts` using environment variables. RLS policies are configured on the `comments` table to allow public reads and inserts.

**Rate limiting caveat:** Rate limiting is in-memory (`Map` in the serverless function). On Vercel, serverless functions can be cold-started, which resets the rate limit map. This means the rate limit is not persistent across cold starts — it provides basic protection but is not bulletproof. For production-grade rate limiting, consider Vercel Edge Config, Upstash Redis, or similar.

### The old GitHub Pages setup
The old Gatsby site used `sygessese.github.io` as the repository. GitHub Pages serves whatever is in that repo's `gh-pages` branch (or `main` with `/docs` output). This is fully static — no server, no runtime. DNS previously pointed `gessese.com` to GitHub's Pages servers.

### Why GitHub Pages would not work for v2
The v2 site has Next.js API routes (`/api/posts`, `/api/posts/[slug]`, `/api/comments`, `/api/comments/[slug]`). These routes use Node.js `fs` and Supabase respectively. GitHub Pages serves only static files — there is no Node.js runtime.

### AWS EC2 mention
The original site setup involved AWS EC2 instances. They are not part of the v2 architecture. When confirmed, they should be shut down.

---

## 9. Known Constraints

### Node version
- System default node (from nvm): v15.14.0
- Required node: v20.20.0
- nvm is installed at `~/.nvm`
- Node 20 path: `/Users/gessese/.nvm/versions/node/v20.20.0/bin/node`
- `npm` binary uses `#!/usr/bin/env node` and picks up Node v15 — calls to `npm` from the system shell will fail for anything requiring `node:path` (npm v10+ syntax)
- Workaround: invoke npm as `node20 path/to/npm-cli.js` or use the `dev.sh` approach

### No turbopack
Next.js 16 defaults to Turbopack. It panics with `Failed to write app endpoint /page` in this environment. Always use `--webpack` flag. Already set in `dev.sh`.

### Blog posts are client-fetched (not SSR/SSG)
`/writing/page.tsx` and `/writing/[slug]/page.tsx` are `"use client"` components that fetch from `/api/posts` via `useEffect`. This means:
- Post content is not in the HTML on initial page load (bad for SEO — search engines may not index post content)
- There is a render flash (page renders empty, then posts appear after fetch)
- The individual post page returns `null` while loading (blank white screen briefly)
- This should be converted to Server Components or `generateStaticParams` for SEO and performance

### Inline styles only — no Tailwind in use (mostly)
Despite Tailwind being installed, the codebase uses zero Tailwind utility classes in page components. All styling is done via `style={}` inline props. The one exception is the Nav component, which uses CSS classes defined in `globals.css`. This mixed approach is consistent within each context and works, but means Tailwind's responsive and state utilities are unavailable for page content without switching approach.

### No error boundaries
If an API route fails, the writing page silently shows no posts. No loading state, no error message. The post slug page returns `null` while loading (blank white screen briefly). Comments fail silently on load error.

### Favicon
Still the default Next.js favicon. Needs replacing with a custom one.

### About page bio text
The bio was written by the AI during the build session. Selam needs to replace it with her own words.

### Rate limiting is in-memory
The comment rate limiting uses an in-memory `Map`. On Vercel serverless, this resets on cold start. Not persistent across function invocations or instances.

### Comment email not validated
The email field in comments accepts any string up to 255 chars. There is no format validation beyond checking it is a string. The `type="email"` on the HTML input provides browser-level validation only.

---

## 10. Pending Tasks

### Done (completed since last handoff)
- [x] Site deployed on Vercel
- [x] `gessese.com` DNS pointed to Vercel
- [x] Mobile nav is responsive (frosted glass, stacked name, swipeable links, fade masks)
- [x] Nav styles moved from inline to CSS classes in `globals.css` with `@media` queries
- [x] Comments system built (Supabase-backed, rate limited, sanitized)
- [x] Vercel Analytics added (`<Analytics />` in layout, `track()` on all important links)
- [x] Click tracking on nav links, section doors, music platform links, about links, preorder CTA, comment submissions
- [x] Arrow emoji fixed with `\uFE0E` text variation selector on music + about pages
- [x] About added to home section doors (5th entry)
- [x] `/work` confirmed NOT in nav (intentional)
- [x] Playwright moved to `devDependencies`
- [x] `.claude/launch.json` fixed (uses `/bin/bash` + `dev.sh`)

### Content (blocking for meaningful launch)
- [ ] Replace photo placeholder on `/about` with a real photo (add image to `public/`, update `about/page.tsx`)
- [ ] Write real bio text on `/about`
- [ ] Add Spotify artist page URL to `/music/page.tsx` (replace embed placeholder)
- [ ] Add real artist page URLs for Apple Music, SoundCloud, YouTube Music, Tidal on `/music`
- [ ] Set up a real preorder mechanism for *Becoming* and update the CTA link on `/becoming` (currently links to `#preorder` anchor that doesn't exist)
- [ ] Write and publish first real post (replace or supplement the two sample posts)

### Technical debt
- [ ] Convert `/writing/page.tsx` and `/writing/[slug]/page.tsx` from `"use client"` + API fetch to Server Components or `generateStaticParams` for SEO
- [ ] Implement full markdown rendering (currently only paragraphs and `---` dividers work — no bold, italic, links, images, headings within posts)
- [ ] Add per-page metadata (each page should have its own `<title>` and `description`)
- [ ] Add `sitemap.xml` generation (Next.js has a `sitemap.ts` convention)
- [ ] Add keyboard focus styles (currently `outline: none` from browser default removal)
- [ ] Audit color contrast (accent on cream background)
- [ ] Replace default favicon
- [ ] Add mobile responsive styles for page content (padding at `<640px`, about grid collapse, SilkOrb orb overflow on narrow screens)
- [ ] Add error states and loading states for data fetching (writing page, comments)

### Workflow
- [ ] Merge PR #1 and PR #4 to main once Selam approves
- [ ] Shut down EC2 instance (confirmed — not needed for v2)

### Planned features
- [ ] Add `/snapshots` route — travel photo gallery. Images in `public/photos/` for now; migrate to Cloudinary free tier when repo grows unwieldy.

### Optional / future
- [ ] Social sharing images (og:image) — currently no image is set
- [ ] Persistent rate limiting for comments (Upstash Redis or Vercel Edge Config)
- [ ] Comment moderation / admin interface

---

## 11. Strategic Next Decisions

### Decision 1: Merge the open PRs
PR #1 (initial build) and PR #4 (mobile + comments + analytics) are open. These should be reviewed and merged to get the latest code on `main` and deployed to production.

### Decision 2: Convert blog to SSG or leave as client-fetched API?
Current architecture (client-fetch from API) works but harms SEO — search engines may not see post content. If writing/readership is a goal, this should be fixed.
Converting to Server Components requires changing `writing/page.tsx` and `writing/[slug]/page.tsx` from `"use client"` to server components that import `getAllPosts()` directly. This is a moderate refactor but improves SEO significantly.

### Decision 3: Markdown vs richer post format
Current markdown rendering only supports paragraphs and `---` dividers. If Selam wants to write posts with **bold**, *italic*, [links], images, or headings, a markdown-to-HTML library (`marked`, `remark`, `micromark`) must be added. This is a small addition but requires a decision on which library and whether to sanitize output.

### Technical debt priority order
1. Blog SSG conversion (1-2 hours, high SEO impact)
2. Markdown rendering library (30 min, medium content impact)
3. Per-page metadata (1 hour, medium SEO impact)
4. Mobile responsive styles for page content (3-4 hours, high UX impact)
5. Error/loading states (1 hour, medium UX impact)
6. Favicon replacement (5 min, minor polish)

### Risks
- **Preorder CTA:** The `/becoming` button currently goes nowhere. If anyone visits and clicks "Preorder -- coming soon," they hit a dead anchor. This should be acknowledged — either disable the button or link to a real destination.
- **Node version fragility:** The dev environment requires v20 invoked specifically. If nvm is updated, reinstalled, or the v20 version is changed, `dev.sh` breaks. The hardcoded path `/Users/gessese/.nvm/versions/node/v20.20.0/bin/node` would need to be updated.
- **Rate limiting weakness:** In-memory rate limiting on serverless resets on cold start. A determined spammer could bypass it.
- **Supabase free tier:** The free tier has limits on database size and API calls. For a personal blog with comments this is more than sufficient, but monitor usage if the site gets high traffic.

---

## 12. Assumptions and Open Questions

### Assumptions made during this build (may need verification)
1. **Target audience is NOT engineering companies.** The pivot away from a software portfolio was confirmed verbally but no formal brief exists. All design decisions flow from this assumption.
2. **Markdown-only blog for now.** Selam explicitly chose this over Sanity CMS. Assumed this remains the preference.
3. **`/work` not in nav is intentional.** This was confirmed during the mobile + comments build session. The creative audience does not need the work page in primary navigation.
4. **Seattle is correct location** in `/about` bio text. The bio was AI-written; location was assumed from research on old site.
5. **Vercel is the deployment target.** This is confirmed and actioned — site is deployed on Vercel.
6. **The Becoming preorder doesn't exist yet.** The CTA is a placeholder. Assumed Selam will provide the destination URL when ready.
7. **Email address `sygessese@gmail.com`** is correct on the `/about` page. Sourced from the old site.
8. **Supabase project `supabase-selia-row-xo`** is the correct project for production comments. No staging/dev separation exists.
9. **Comments are public** (no moderation queue). Anyone can post a comment with just a name and body. Email is optional and private.

### Open questions that must be answered before the next session proceeds
1. **What is the Spotify artist URL?** Needed to activate the music page embed and platform links.
2. **What is the preorder destination?** Needed to activate the /becoming CTA.
3. **Has Selam approved PR #1 and PR #4?** If yes, merge to main.
4. **Does Selam want full markdown rendering** (bold, italic, links, headings in posts)?
5. **What photo for /about?** What filename, crop, and style?
6. **Should the writing page be converted to SSG** before launch (SEO consideration)?
7. **Are the two sample posts final**, or should they be deleted before launch?
8. **Does Selam want comment moderation?** Currently all comments appear immediately.

---

## 13. START HERE IF CONTINUING THIS PROJECT

### What exists
A complete, functional Next.js 16 website for Selam Gessese deployed on Vercel at `gessese.com`. All 6 pages are built and styled. A markdown blog pipeline is working. A Supabase-backed comments system is live on individual post pages. Vercel Analytics with custom event tracking is active. Mobile nav is responsive. A GitHub PR workflow with auto-generated screenshots exists. The repo is at `github.com/sygessese/gessese` (public).

### What is stable
- All page layouts and design system (do not change without Selam's approval)
- The color palette (defined as CSS variables in `globals.css`), fonts, animation style
- Orb colors are easily tweakable via CSS variables (`--orb-1-center`, etc.) with VS Code color previews
- The markdown blog pipeline (write `.md` in `src/content/posts/`, push, done)
- Git/GitHub workflow — branch -> PR -> screenshot -> merge
- `/ship` slash command in `.claude/commands/ship.md`
- Mobile nav layout (CSS classes in `globals.css`, breakpoint at 640px)
- Comments system (Supabase, rate limiting, sanitization)
- Analytics and click tracking (Vercel Analytics, `track()` calls on all important links)
- `.claude/launch.json` is working (uses `/bin/bash` + `dev.sh`)
- Deployment to Vercel is live and working

### What is in flux
- PR #1 (initial build) and PR #4 (mobile + comments + analytics) are open and unmerged — they contain the latest work
- Current working branch: `ship/2026-02-28-initial-build`

### What is broken / needs attention
- All platform links on `/music` go to platform homepages, not Selam's artist pages
- Preorder CTA on `/becoming` links to `#preorder` (dead anchor)
- Photo on `/about` is a placeholder div
- Bio text on `/about` was AI-generated and needs Selam's voice
- Blog posts are client-fetched (bad for SEO — should be SSG/Server Components)
- Markdown rendering is limited to paragraphs and `---` dividers only
- No per-page metadata
- No sitemap.xml
- Default favicon
- Mobile padding for page content not yet addressed (only nav is responsive)

### What decision is next
**Primary decision:** Merge PR #1 and PR #4 to `main` so the latest code is deployed to production. Everything else (content updates, SSG conversion, markdown rendering) can happen after.

**If Selam says "update content":** Create a new feature branch, update music links, preorder link, about photo, about bio, then run `/ship` to create a new PR.

**If Selam says "fix technical issues":** Work on SSG conversion for the blog, add markdown rendering library, add per-page metadata, add sitemap — in that priority order.

### Dev environment quick-start
```bash
# All commands from /Users/gessese/gessese-v2
# Node 20 required — verify:
/Users/gessese/.nvm/versions/node/v20.20.0/bin/node --version  # should print v20.20.0

# Start dev server (Claude Preview):
# Use preview_start with name "gessese-v2 dev" in Claude

# Start dev server (manual):
bash dev.sh

# Install dependencies (if needed):
/Users/gessese/.nvm/versions/node/v20.20.0/bin/node /Users/gessese/.nvm/versions/node/v20.20.0/bin/npm install

# Take screenshots:
/Users/gessese/.nvm/versions/node/v20.20.0/bin/node scripts/screenshot.mjs

# Build for production:
/Users/gessese/.nvm/versions/node/v20.20.0/bin/node ./node_modules/.bin/next build --webpack

# Publish a post:
# 1. Create src/content/posts/my-title.md with frontmatter (title, date, description)
# 2. git add . && git commit -m "post: title" && git push
```

### Supabase connection
- Project: `supabase-selia-row-xo`
- URL: `https://qaghsjxtfpwtazrypzpr.supabase.co`
- Dashboard: `https://supabase.com/dashboard/project/qaghsjxtfpwtazrypzpr`
- Table: `comments` (columns: id, post_slug, name, email, body, created_at)
- RLS enabled — public reads and inserts allowed

### Key file locations
| What | Where |
|---|---|
| Dev server script | `/Users/gessese/gessese-v2/dev.sh` |
| CSS variables / palette / nav styles | `src/app/globals.css` |
| Root layout (fonts, nav, analytics) | `src/app/layout.tsx` |
| Home page (section doors) | `src/app/page.tsx` |
| Nav component | `src/components/Nav.tsx` |
| Silk orb animation | `src/components/SilkOrb.tsx` |
| Comments component | `src/components/Comments.tsx` |
| Blog posts (markdown) | `src/content/posts/*.md` |
| Blog data utility (server-only) | `src/lib/posts.ts` |
| Supabase client | `src/lib/supabase.ts` |
| Comments POST API | `src/app/api/comments/route.ts` |
| Comments GET API | `src/app/api/comments/[slug]/route.ts` |
| Posts list API | `src/app/api/posts/route.ts` |
| Single post API | `src/app/api/posts/[slug]/route.ts` |
| Individual post page (with comments) | `src/app/writing/[slug]/page.tsx` |
| Environment variables (local) | `.env.local` (gitignored) |
| Claude Preview config | `.claude/launch.json` |
| Ship command | `.claude/commands/ship.md` |
| Screenshot script | `scripts/screenshot.mjs` |
| PR screenshots | `.pr-assets/screenshots/` |
