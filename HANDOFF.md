# gessese.com v2 — Project Handoff Document

**Last updated:** 2026-02-28 (session 2)
**Prepared for:** Selam Gessese, any AI session continuing this work, or any engineer picking this up
**Status:** Development complete. Vercel confirmed as deployment target. Not yet live at gessese.com.

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
- Active nav link highlighted in accent color (`--accent: #C4A882`)

---

## 3. Information Architecture

### Full sitemap (current)

```
/                       Landing page
/writing                Post index
/writing/[slug]         Individual post
/becoming               Poetry collection (preorder shell)
/music                  Music / streaming platforms
/work                   Resume (experience, education, projects, skills)
/about                  Bio + contact links
/api/posts              GET — all posts metadata (internal Next.js API)
/api/posts/[slug]       GET — single post with full content (internal Next.js API)
```

### Navigation structure
Fixed transparent top bar, two zones:
- **Left:** "SELAM GESSESE" — wordmark in Cormorant Garamond, links to `/`
- **Right:** four links in DM Sans — writing · music · becoming · about

Note: `/work` is NOT in the nav. It exists as a page and is linked from the home section doors, but is not in the primary navigation. This was an implicit choice during development that should be confirmed with Selam — given the audience shift away from engineering, this may be intentional.

### Pages — section breakdown

#### `/` — Home
| Section | Purpose |
|---|---|
| SilkOrb (background) | Ambient animated gradient — three independent orbs (rose-quartz, peach, lilac) drifting and blending, 50% size to reveal background, aria-hidden |
| Name (`h1`) | "Selam" + italic "Gessese" at display scale — primary identity statement |
| Identity line | "POET · MUSICIAN · WRITER" — defines audience expectations before anything else |
| Section doors | Four hairline-bordered links: Writing, Music, Becoming, Work. Hover reveals `→` in accent. |

#### `/writing` — Post index
| Section | Purpose |
|---|---|
| Page heading | "Writing" (display serif) + subtitle "ESSAYS · MUSINGS · BRAIN DUMPS" |
| Post list | Fetched from `/api/posts`, rendered as hairline rows: date, italic title, description |

Posts are fetched client-side via `useEffect` → `fetch('/api/posts')`. This is a deliberate architecture choice (see Infrastructure Notes section).

#### `/writing/[slug]` — Individual post
| Section | Purpose |
|---|---|
| Back link | "← Writing" — returns to index |
| Date | Full date in DM Sans small caps |
| Title | Italic Cormorant at display scale |
| Body | Paragraphs split on `\n\n`, `---` rendered as `<hr>`. Plain text only — no markdown link, image, or heading support currently |

#### `/becoming` — Poetry collection
| Section | Purpose |
|---|---|
| Eyebrow | "A POETRY COLLECTION" in accent amber |
| Title | Italic "Becoming" at 9rem max — most dramatic element on the site |
| Author | "SELAM GESSESE" at low opacity |
| Blockquote | Sample line with amber left-border: "There is a version of me..." |
| Preorder CTA | Button linking to `#preorder` (anchor placeholder — no preorder system connected yet) |

Background: dark (`--ink: #1A1A18`) with amber-brown radial gradient orb. This is the only page with a dark background.

#### `/music` — Music
| Section | Purpose |
|---|---|
| Page heading | "Music" + "STREAMING EVERYWHERE" |
| Spotify embed placeholder | `200px` `--accent-light` div — awaiting real Spotify artist embed URL |
| Platform links | Spotify, Apple Music, SoundCloud, YouTube Music, Tidal — all link to platform homepages (not Selam's artist page yet) |

#### `/work` — Resume
| Section | Purpose |
|---|---|
| Page heading | "Work" + "EXPERIENCE · EDUCATION · PROJECTS" |
| Experience | ACLU of Washington (2018–19), City of Seattle (2018–19) |
| Education | Hack Reactor, University of Washington, Seattle Central College |
| Projects | Twitook, Hungry (reduced from original 4 — Selam trimmed to 2) |
| Skills | Languages, Frameworks, Databases, Tools — two-column grid |

Animation on this page uses `x: 40 → 0` slide-in (not the `y` fade-up used everywhere else) — Selam modified this herself.

#### `/about` — Bio
| Section | Purpose |
|---|---|
| Page heading | "About" |
| Two-column layout | Left: `3/4` aspect ratio photo placeholder (`--accent-light`). Right: three body paragraphs in Cormorant italic + DM Sans |
| Links row | GitHub, LinkedIn, Email — hairline-bordered row at bottom |

Current bio text is placeholder that was written during the build session. Selam needs to replace with her own words.

---

## 4. Visual and Design System

### Typography

| Role | Font | Variable | Weights | Style |
|---|---|---|---|---|
| Display / headings | Cormorant Garamond | `var(--font-cormorant)` | 300, 400, 500, 600 | normal + italic |
| UI / body / metadata | DM Sans | `var(--font-dm-sans)` | 300, 400, 500 | normal only |

Both fonts loaded via `next/font/google` in `layout.tsx` and injected as CSS variables. Never import from `@next/font` directly in page components — always reference `var(--font-cormorant)` and `var(--font-dm-sans)`.

**Usage rules:**
- Cormorant Garamond: all `h1`, `h2`, display text, post titles, blockquotes, body copy in long-form reading contexts
- DM Sans: nav links, metadata, dates, labels, subtitles, button text, skills grid values, descriptions
- `fontWeight: 300` is the default body weight for DM Sans — use 400 for nav links, 500 sparingly
- Italic Cormorant is used for: last name on homepage, post titles, blockquotes, *Becoming* title, about bio opening paragraph

**Fluid sizing pattern:**
```css
fontSize: "clamp(3rem, 7vw, 5.5rem)"   /* page headings */
fontSize: "clamp(3.5rem, 9vw, 7.5rem)" /* home h1 */
fontSize: "clamp(4rem, 12vw, 9rem)"    /* Becoming title */
fontSize: "clamp(1.1rem, 2vw, 1.3rem)" /* post body */
fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" /* resume h2 */
```

**Metadata / label pattern:**
```
fontFamily: DM Sans
fontSize: 0.65rem–0.75rem
letterSpacing: 0.1em–0.2em
textTransform: uppercase
color: var(--ink-muted)
```

### Color palette

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#F9F7F4` | Page background (all pages except /becoming) |
| `--ink` | `#1A1A18` | Primary text, headings, borders base color |
| `--ink-muted` | `#6B6B68` | Secondary text, metadata, labels, descriptions |
| `--accent` | `#C4A0BC` | Active nav link, role labels, hover states, CTA button background, link underlines, left-border on blockquote, scrollbar thumb |
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

Borders: `rgba(26,26,24,0.1)` — derived from `--ink` at 10% opacity. Used consistently for all hairline dividers.

**Orb color variables:** Named by structure (center/blend/outer), not color. This allows colors to be changed in `globals.css` without variable names becoming misleading. VS Code shows color previews on hover.

**CSS variables defined in:** `src/app/globals.css`
**Tailwind token aliases defined in:** `globals.css` under `@theme inline {}` (Tailwind v4 syntax)

### Spacing system
No formal spacing scale. All spacing is inline via `style={}`. Common patterns in use:

- Page top padding: `10rem` (inner pages) to `8rem` (home, /becoming)
- Content max-width: `720px` (most pages), `640px` (post body), `680px` (home)
- Section gap (hairline rows): `padding: "2.5rem 0"` or `"2rem 0"`
- Bottom page padding: `6rem–8rem`
- Nav padding: `1.5rem 2.5rem`

### Grid system
No CSS grid framework. Layout uses:
- Flexbox column for all page content stacks
- `display: grid; gridTemplateColumns: "120px 1fr"` for skills rows
- `display: grid; gridTemplateColumns: "1fr 2fr"` for about page photo/bio
- `display: flex; justifyContent: space-between` for title + date/type label rows

### Component patterns

**Hairline row:** `borderTop: "1px solid rgba(26,26,24,0.1)"`, `padding: "2.5rem 0"`. Used on: home section doors, writing post list, work resume rows, music platform list, about links row.

**Section label:** DM Sans, 0.65rem, 0.2em letter spacing, uppercase, `--ink-muted`, `paddingTop: 4rem`. Used in /work to separate EXPERIENCE / EDUCATION / PROJECTS / SKILLS.

**Accent link:** `color: var(--accent)`, `borderBottom: "1px solid var(--accent)"`, `textTransform: uppercase`, `letterSpacing: 0.12em`, `fontSize: 0.7rem`. Used for "GitHub ↗", "← Writing".

**Hover pattern (inline):** All hover states handled via `onMouseEnter`/`onMouseLeave` on the element, updating `style.color` directly. Framer Motion is NOT used for hover states — only for mount animations.

### Animation philosophy
- **Entry animations only** — elements animate in on page mount, not on scroll (no scroll-triggered animations implemented yet)
- **Framer Motion** for all animations. Pattern: `initial={{ opacity: 0, y: 24 }}`, `animate={{ opacity: 1, y: 0 }}`, staggered via `delay: i * 0.1`
- **Easing:** `[0.22, 1, 0.36, 1]` — custom cubic bezier (ease-out-expo feel) used consistently everywhere
- **Duration:** 0.6–1.0s for primary elements, 0.5–0.8s for secondary
- **SilkOrb:** Three Framer Motion `motion.div` elements looping with `repeat: Infinity`, durations of 22s, 26s, 24s. Orb sizes: 340px, 260px, 225px (50% of original). Each orb has core (center + blend colors) and halo (outer color) layers. Values: x/y drift variable, scale ±5–18%. `filter: blur(75–100px)`. `pointerEvents: none`, `aria-hidden: true`. Colors defined as CSS variables (`--orb-1-center`, `--orb-1-blend`, etc.).
- **/work page exception:** Selam modified the fadeUp function to use `x: 40 → 0` (slide from right) with `duration: 1.3` and `delay: 1` as default — different from all other pages.
- No page transition animations implemented (each page animates independently on load)

### Accessibility
- `aria-hidden="true"` on SilkOrb and decorative orbs
- `lang="en"` on `<html>`
- `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` on body
- `smooth` scroll behavior on html
- **Not yet addressed:** keyboard focus styles, skip-nav link, ARIA labels on icon-only links, color contrast audit (accent amber on cream may be marginal)

### Mobile responsiveness
- `clamp()` used for all major font sizes — text scales with viewport
- `maxWidth` constraints on content (640–720px) with `margin: 0 auto` — works on wide screens
- **Not yet addressed:** nav collapses on mobile (currently a horizontal flex row that will break at small widths), padding at mobile breakpoints, SilkOrb orbs overflow on narrow screens
- No Tailwind responsive prefixes used anywhere — all layout is inline styles

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
| Screenshots (dev tool) | Playwright | ^1.58.2 |
| Linting | ESLint + eslint-config-next | ^9 / 16.1.6 |
| Node.js | v20.20.0 (via nvm) | required |

### Why this stack was chosen
- **Next.js 16:** App Router enables API routes for the blog system. Serverless-compatible for Vercel deployment. Strong TypeScript support.
- **Framer Motion:** The silk orb animation and staggered entry animations were a core design requirement. CSS-only animation would be insufficient.
- **Tailwind v4:** Chosen for utility availability; however, in practice almost zero Tailwind utilities are used in the current codebase — all styling is inline `style={}`. The CSS variables defined in globals.css are the real styling system.
- **gray-matter:** Parses YAML frontmatter from `.md` files. Chosen because Selam explicitly chose markdown files over a CMS (Sanity was proposed and declined). Posts live on disk, not in a database.
- **No CMS:** Deliberate. Selam wanted to write locally and push to publish. This means blog posts are version-controlled alongside code.

**Mode:** Next.js is running in **webpack mode** (not Turbopack). Turbopack crashed in this environment (`Failed to write app endpoint /page`). The `--webpack` flag is set explicitly in `dev.sh`. Do not attempt to enable Turbopack without testing.

### Hosting platform
- **Target:** Vercel — **confirmed decision**
- **Current production:** `gessese.com` still points to the old Gatsby site at `sygessese.github.io` (GitHub Pages). The v2 site is NOT live at the domain yet.
- **GitHub repo:** `https://github.com/sygessese/gessese` (public)
- **EC2:** To be shut down. Was used for old project demos. Not part of v2 architecture.

### Build system
Standard Next.js build: `next build`. No custom build steps.

The dev server cannot be started with the system `npm` command because the system Node is v15 (set by nvm default alias before this project). A custom `dev.sh` script is required — see dev server section below.

### Third-party integrations (current)
- **Google Fonts:** Cormorant Garamond + DM Sans via `next/font/google` — loaded server-side, no external network request at render time
- **GitHub:** Version control + PR workflow (public repo)
- **Playwright:** Used only for screenshot automation in the `/ship` workflow, not at runtime

### Third-party integrations (placeholder / pending)
- **Spotify:** Embed placeholder exists in `/music/page.tsx`. Awaiting Selam's artist page URL.
- **Apple Music, SoundCloud, YouTube Music, Tidal:** Placeholder links to platform homepages. Awaiting Selam's artist page URLs.
- **Preorder system:** `/becoming` page CTA button links to `#preorder` anchor (no actual system). Needs a real link (Kickstarter, Gumroad, publisher page, etc.)
- **Comments:** To be added to `/writing/[slug]`. Decision pending: Giscus (GitHub Discussions, free, requires GitHub account) vs traditional (name/email, requires a database). Giscus is simpler; traditional is more accessible to non-technical readers.
- **Photos / /snapshots:** A `/snapshots` travel photo gallery route is planned. Images will be stored in `public/photos/` in the repo for now. When the repo grows too large, migrate to Cloudinary free tier (images stay at permanent URLs, Next.js page embeds them).

### SEO strategy
Current state: minimal.
- `<title>Selam Gessese</title>`
- `<meta name="description" content="Poet. Musician. Writer.">`
- OpenGraph tags: title, description, url, siteName — set in `layout.tsx`
- No structured data (JSON-LD)
- No sitemap.xml
- No robots.txt
- No canonical URLs
- No per-page metadata overrides (all pages inherit root layout metadata)

### Performance optimization
- Fonts loaded via `next/font/google` — zero layout shift, fonts inlined at build time
- No images in the codebase yet (photo on /about is a `div` placeholder)
- No analytics scripts loaded
- No third-party scripts
- SilkOrb runs on GPU via `filter: blur()` and `transform` — smooth on modern hardware, untested on low-power devices

---

## 6. File Structure

```
/Users/gessese/gessese-v2/
│
├── dev.sh                          # CRITICAL: dev server launcher (see below)
├── next.config.ts                  # Empty Next.js config (no customizations)
├── package.json                    # Dependencies
├── postcss.config.mjs              # Tailwind v4 PostCSS setup
├── tsconfig.json                   # TypeScript config (default Next.js)
├── eslint.config.mjs               # ESLint config
│
├── public/                         # Static assets served at /
│   └── *.svg                       # Default Next.js placeholder SVGs (unused)
│
├── scripts/
│   └── screenshot.mjs              # Auto-discovery screenshot script for /ship
│
├── src/
│   ├── app/                        # Next.js App Router — all routes live here
│   │   ├── layout.tsx              # Root layout: fonts, metadata, <Nav />, globals.css import
│   │   ├── globals.css             # CSS variables, Tailwind import, global resets
│   │   ├── favicon.ico             # Default Next.js favicon (replace with custom)
│   │   │
│   │   ├── page.tsx                # Route: / (home — SilkOrb + section doors)
│   │   ├── about/page.tsx          # Route: /about
│   │   ├── becoming/page.tsx       # Route: /becoming
│   │   ├── music/page.tsx          # Route: /music
│   │   ├── work/page.tsx           # Route: /work
│   │   │
│   │   ├── writing/
│   │   │   ├── page.tsx            # Route: /writing (post index)
│   │   │   └── [slug]/page.tsx     # Route: /writing/[slug] (individual post)
│   │   │
│   │   └── api/
│   │       └── posts/
│   │           ├── route.ts        # GET /api/posts — returns all post metadata
│   │           └── [slug]/route.ts # GET /api/posts/[slug] — returns post + content
│   │
│   ├── components/
│   │   ├── Nav.tsx                 # Fixed top navigation bar
│   │   └── SilkOrb.tsx             # Three-orb animated background (50% size, structural CSS variables)
│   │
│   ├── content/
│   │   └── posts/                  # Markdown blog posts — add files here to publish
│   │       ├── on-beginning-again.md
│   │       └── things-im-learning-to-let-be.md
│   │
│   └── lib/
│       └── posts.ts                # getAllPosts(), getPostBySlug(), formatDate()
│
├── .claude/
│   ├── launch.json                 # Claude Preview server config (broken — see notes)
│   ├── commands/
│   │   └── ship.md                 # /ship slash command instructions
│   └── ships/
│       └── 2026-02-28-initial-build.md  # Ship log
│
└── .pr-assets/
    └── screenshots/                # Auto-generated page screenshots for PRs
        ├── home.png
        ├── writing.png
        ├── writing__on-beginning-again.png
        ├── writing__things-im-learning-to-let-be.png
        ├── becoming.png
        ├── music.png
        ├── work.png
        └── about.png
```

### Key file explanations

**`dev.sh`** — The dev server CANNOT be started with a plain `npm run dev` because the system shell resolves `node` to v15 (set by nvm alias before this project). This script sources nvm and invokes node v20 directly with the full binary path, then runs Next.js in webpack mode:
```bash
exec /Users/gessese/.nvm/versions/node/v20.20.0/bin/node node_modules/next/dist/bin/next dev --webpack
```
If this file is lost or broken, the dev server will fail with `Cannot find module 'node:path'` because npm's shebang (`#!/usr/bin/env node`) picks up Node v15.

**`scripts/screenshot.mjs`** — Walks `src/app` to auto-discover all routes. For static routes (no `[param]`), uses the folder name directly. For dynamic routes (`[slug]`), looks up a resolver in `DYNAMIC_RESOLVERS` to enumerate real values. Currently has one resolver: `/writing/[slug]` reads `src/content/posts/*.md`. Add new resolvers when new dynamic routes are added.

**`src/lib/posts.ts`** — Runs on the server only (Node.js `fs` module). Called by API routes. Reads files from `src/content/posts/`, parses frontmatter with gray-matter, sorts newest-first by `date` frontmatter field.

**`.claude/launch.json`** — Supposed to configure the Claude Preview tool's dev server. Currently set to `npm run dev` which does NOT work (Node v15 issue). Should be reconfigured to use `/bin/bash` + `dev.sh`. The actual working server is started manually by running `preview_start` with the correct config.

---

## 7. Deployment Architecture

### Current state (as of 2026-02-28)
- `gessese.com` is live and resolving to the **old Gatsby v2 site** at `sygessese.github.io` (GitHub Pages)
- The **new v2 site** (`gessese-v2` repo) exists at GitHub (`sygessese/gessese`) and runs locally but has not been deployed anywhere
- The two repos are entirely separate:
  - Old: `github.com/sygessese/sygessese.github.io` — do not touch this; it is the safety net
  - New: `github.com/sygessese/gessese` — this is where all v2 work lives

### Domain configuration
- Domain: `gessese.com`
- Registrar: Amazon Route 53
- Current DNS: Points to GitHub Pages (CNAME or A records for `sygessese.github.io`)
- Required change: Update Route 53 to point to Vercel when ready to go live

### GitHub repository
- URL: `https://github.com/sygessese/gessese`
- Visibility: **Public**
- Default branch: `main`
- Current branches: `main`, `ship/2026-02-28-initial-build`
- Open PRs: PR #1 — `ship/2026-02-28-initial-build` → `main`

### Branch workflow (experiment model)
- `main` = approved, stable site state. Merging to main triggers deploy (once Vercel is connected).
- Feature/experiment work goes on named branches
- The `/ship` command creates `ship/YYYY-MM-DD-description` branches
- A GitHub PR is opened for human review before merge
- Selam reviews the PR (with embedded screenshots), approves, merges

### What is static vs dynamic
- **Static:** All UI — home, about, becoming, music, work, writing index, individual post pages. These are React components with no server-side data fetching at render time.
- **Dynamic (runtime):** `/api/posts` and `/api/posts/[slug]` — Next.js API routes that read markdown files from disk at request time using Node.js `fs`.
- **This means:** The site cannot be exported as a fully static site (`next export`) in its current form. The API routes require a Node.js runtime. GitHub Pages cannot run this. **Vercel is required.**

---

## 8. Infrastructure Notes

### The old GitHub Pages setup
The old Gatsby site used `sygessese.github.io` as the repository. GitHub Pages serves whatever is in that repo's `gh-pages` branch (or `main` with `/docs` output). This is fully static — no server, no runtime. DNS pointed `gessese.com` to GitHub's Pages servers.

### Why GitHub Pages won't work for v2
The v2 site has Next.js API routes (`/api/posts`, `/api/posts/[slug]`). These routes use Node.js `fs` to read markdown files at request time. GitHub Pages serves only static files — there is no Node.js runtime. If you attempted `next export` to generate a static site, the API routes would be excluded and the writing page would have no data source.

**The only solutions are:**
1. **Vercel** (recommended) — native Next.js deployment, zero config, free tier is sufficient
2. **Self-host on EC2** — more complex, requires managing Node process, nginx, SSL
3. **Refactor to static generation** — use `generateStaticParams` + `getStaticProps` pattern to pre-render all post pages at build time, eliminating API routes. This is architecturally cleaner but requires rewriting the blog data layer.

### AWS EC2 mention
The original site setup involved AWS EC2 instances (referenced in the domain/hosting configuration). As of this project, those EC2 instances are assumed to be part of the old infrastructure pointing at or supporting the GitHub Pages deployment. They are not part of the v2 architecture. When v2 goes live, EC2 involvement ends unless Selam explicitly wants to self-host.

**No changes have been made to EC2 or Route 53.** The DNS still points to the old site.

### Vercel integration (not yet done)
Steps to connect:
1. Go to vercel.com → New Project → Import from GitHub → select `sygessese/gessese`
2. Framework preset: Next.js (auto-detected)
3. No environment variables required currently
4. Deploy. Vercel will assign a `*.vercel.app` preview URL
5. Add custom domain in Vercel dashboard: `gessese.com`
6. Vercel will provide DNS records (CNAME or A records)
7. Update those records in Amazon Route 53
8. Old GitHub Pages site will stop being served once DNS propagates (~minutes to 1 hour)

### Serverless constraints affecting the blog
Vercel runs Next.js API routes as serverless functions. The `fs` calls in `src/lib/posts.ts` read files from `src/content/posts/`. On Vercel, the build output includes these markdown files — they are bundled at build time and accessible to the serverless function at runtime via `process.cwd()`. This works correctly on Vercel without modification.

**Important:** New markdown posts added via git push trigger a Vercel rebuild and redeploy automatically. The post pipeline (write `.md` → push → post is live) works as designed.

### GitHub Pages vs Vercel — no conflict
These are separate DNS targets. Switching is a DNS update, not a code change. The old `sygessese.github.io` repo can remain untouched indefinitely as a rollback option.

### Cleanest architectural path forward
1. Connect Vercel to `sygessese/gessese` repo
2. Test the Vercel preview URL thoroughly
3. Update Route 53 DNS to point `gessese.com` → Vercel
4. Verify old site is replaced (allow DNS propagation)
5. Leave `sygessese.github.io` intact as a permanent backup

No code changes are required for deployment.

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

### Playwright is listed as a production dependency
`playwright` ended up in `dependencies` rather than `devDependencies` in `package.json`. This is a minor issue — it means playwright is included in the production bundle on Vercel. It should be moved to `devDependencies`. It is only used by `scripts/screenshot.mjs` which is a local dev tool, never run in production.

### Blog posts are client-fetched (not SSR/SSG)
`/writing/page.tsx` and `/writing/[slug]/page.tsx` are `"use client"` components that fetch from `/api/posts` via `useEffect`. This means:
- Post content is not in the HTML on initial page load (bad for SEO — search engines may not index post content)
- There is a render flash (page renders empty, then posts appear after fetch)
- This should be converted to Server Components or `generateStaticParams` for SEO and performance

### Inline styles only — no Tailwind in use
Despite Tailwind being installed, the codebase uses zero Tailwind utility classes in practice. All styling is done via `style={}` inline props. This is consistent and works, but means Tailwind's responsive and state utilities are unavailable without switching approach.

### No error boundaries
If an API route fails, the writing page silently shows no posts. No loading state, no error message. The post slug page returns `null` while loading (blank white screen briefly).

### Favicon
Still the default Next.js favicon. Needs replacing with a custom one.

### About page bio text
The bio ("I'm Selam — a poet, musician, and writer based in Seattle...") was written by the AI during the build session. Selam needs to replace it with her own words.

---

## 10. Pending Tasks

### Infrastructure (blocking for launch)
- [ ] Connect Vercel to `sygessese/gessese` GitHub repo
- [ ] Test site on Vercel preview URL before switching DNS
- [ ] Update Amazon Route 53 DNS records: `gessese.com` → Vercel nameservers or CNAME
- [ ] Verify `www.gessese.com` redirect (Vercel handles this automatically if both are added)
- [ ] Shut down EC2 instance (confirmed — not needed for v2)

### Content (blocking for meaningful launch)
- [ ] Replace photo placeholder on `/about` with a real photo (add image to `public/`, update `about/page.tsx`)
- [ ] Write real bio text on `/about`
- [ ] Add Spotify artist page URL to `/music/page.tsx` (replace embed placeholder)
- [ ] Add real artist page URLs for Apple Music, SoundCloud, YouTube Music, Tidal on `/music`
- [ ] Set up a real preorder mechanism for *Becoming* and update the CTA link on `/becoming` (currently links to `#preorder` anchor that doesn't exist)
- [ ] Write and publish first real post (replace or supplement the two sample posts)

### Navigation decision
- [ ] Confirm with Selam: should `/work` be in the top nav? Currently it is NOT (only in home section doors). Given the audience shift away from engineers, this may be intentional — or an oversight.

### Technical debt
- [ ] Move `playwright` from `dependencies` to `devDependencies` in `package.json`
- [ ] Fix `.claude/launch.json` to use `dev.sh` instead of `npm run dev` (currently broken)
- [ ] Convert `/writing/page.tsx` and `/writing/[slug]/page.tsx` from `"use client"` + API fetch to Server Components or `generateStaticParams` for SEO
- [ ] Implement full markdown rendering (currently only paragraphs and `---` dividers work — no bold, italic, links, images, headings within posts)
- [ ] Add mobile responsive styles (nav overflow, padding at `<640px`, orb overflow)
- [ ] Add per-page metadata (each page should have its own `<title>` and `description`)
- [ ] Add `sitemap.xml` generation (Next.js has a `sitemap.ts` convention)
- [ ] Add keyboard focus styles (currently `outline: none` from browser default removal)
- [ ] Audit color contrast (amber accent on cream background)
- [ ] Replace default favicon

### Workflow
- [ ] Fix `/ship` command — confirm the `ship` skill is recognized after Claude Code restart in the `gessese-v2` project directory
- [ ] Merge PR #1 to main once Selam approves the initial build

### Planned features
- [ ] Add `/snapshots` route — travel photo gallery. Images in `public/photos/` for now; migrate to Cloudinary free tier when repo grows unwieldy.
- [ ] Add comments to `/writing/[slug]` — decision pending between Giscus and traditional name/email comments

### Optional / future
- [ ] Analytics (Vercel Analytics is zero-config once deployed — just enable in dashboard)
- [ ] Social sharing images (og:image) — currently no image is set
- [ ] `/snapshots` images: migrate to Cloudinary when public/photos/ gets too large

---

## 11. Strategic Next Decisions

### Decision 1: Deploy to Vercel now or iterate first?
**Decided: Vercel confirmed.** Next step is connecting the repo and getting a preview URL before switching DNS.

### Decision 2: Convert blog to SSG or leave as client-fetched API?
Current architecture (client-fetch from API) works but harms SEO — search engines may not see post content. If writing/readership is a goal, this should be fixed before launch.
Converting to Server Components requires changing `writing/page.tsx` and `writing/[slug]/page.tsx` from `"use client"` to server components that import `getAllPosts()` directly. This is a moderate refactor but improves SEO significantly.

### Decision 3: Work page placement
`/work` is not in the top nav. If Selam wants it discoverable, it needs to be added. If it's intended as a quiet page (exists for when needed, not featured), it stays as-is.

### Decision 4: Markdown vs richer post format
Current markdown rendering only supports paragraphs and `---` dividers. If Selam wants to write posts with **bold**, *italic*, [links], images, or headings, a markdown-to-HTML library (`marked`, `remark`, `micromark`) must be added. This is a small addition but requires a decision on which library and whether to sanitize output.

### Technical debt priority order
1. Playwright to devDependencies (2 min, no risk)
2. Blog SSG conversion (1–2 hours, high SEO impact)
3. Mobile responsive styles (3–4 hours, high UX impact)
4. Markdown rendering library (30 min, medium content impact)
5. Per-page metadata (1 hour, medium SEO impact)

### Risks
- **DNS switch risk:** Low. Old repo stays intact. If anything breaks, Route 53 can be reverted in minutes.
- **Preorder CTA:** The `/becoming` button currently goes nowhere. If anyone visits and clicks "Preorder — coming soon," they hit a dead anchor. This should be acknowledged — either disable the button or link to a real destination.
- **Node version fragility:** The dev environment requires v20 invoked specifically. If nvm is updated, reinstalled, or the v20 version is changed, `dev.sh` breaks. The hardcoded path `/Users/gessese/.nvm/versions/node/v20.20.0/bin/node` would need to be updated.

---

## 12. Assumptions and Open Questions

### Assumptions made during this build (may need verification)
1. **Target audience is NOT engineering companies.** The pivot away from a software portfolio was confirmed verbally but no formal brief exists. All design decisions flow from this assumption.
2. **Markdown-only blog for now.** Selam explicitly chose this over Sanity CMS. Assumed this remains the preference.
3. **`/work` not in nav is intentional.** This was not discussed explicitly — the nav was built with writing/music/becoming/about and work was not added. Should be confirmed.
4. **Seattle is correct location** in `/about` bio text. The bio was AI-written; location was assumed from research on old site.
5. **Vercel is the deployment target.** This was discussed and agreed but not actioned.
6. **The Becoming preorder doesn't exist yet.** The CTA is a placeholder. Assumed Selam will provide the destination URL when ready.
7. **Email address `sygessese@gmail.com`** is correct on the `/about` page. Sourced from the old site.

### Open questions that must be answered before the next session proceeds
1. **Is /work in the nav?** Yes or no — affects Nav.tsx.
2. **What is the Spotify artist URL?** Needed to activate the music page embed and platform links.
3. **What is the preorder destination?** Needed to activate the /becoming CTA.
4. **Has Selam approved PR #1?** If yes, merge to main and proceed to Vercel setup.
5. **Does Selam want full markdown rendering** (bold, italic, links, headings in posts)?
6. **What photo for /about?** What filename, crop, and style?
7. **Should the writing page be converted to SSG** before launch (SEO consideration)?
8. **Are the two sample posts final**, or should they be deleted before launch?

---

## 13. START HERE IF CONTINUING THIS PROJECT

### What exists
A complete, functional Next.js 16 website for Selam Gessese (`gessese.com`). All 6 pages are built and styled. A markdown blog pipeline is working. A GitHub PR workflow with auto-generated screenshots exists. The repo is at `github.com/sygessese/gessese` (public).

### What is stable
- All page layouts and design system (do not change without Selam's approval)
- The color palette (defined as CSS variables in `globals.css`), fonts, animation style
- Orb colors are now easily tweakable via CSS variables (`--orb-1-center`, etc.) with VS Code color previews
- The markdown blog pipeline (write `.md` in `src/content/posts/`, push, done)
- Git/GitHub workflow — branch → PR → screenshot → merge
- `/ship` slash command in `.claude/commands/ship.md`

### What is in flux
- `/work` page: Selam modified the animation style herself — the page content (trimmed to 2 projects) and animation (slide-from-right) reflect her edits
- PR #1 is open and unmerged — it contains the full initial build including screenshots
- The site is NOT live at `gessese.com` yet — old Gatsby site still serves there

### What is broken / needs attention
- `.claude/launch.json` references `npm run dev` which doesn't work — use `preview_start` with the `gessese-v2` config name (which internally uses `/bin/bash` + `dev.sh`)
- All platform links on `/music` go to platform homepages, not Selam's artist pages
- Preorder CTA on `/becoming` links to `#preorder` (dead anchor)
- Photo on `/about` is a placeholder div
- Bio text on `/about` was AI-generated and needs Selam's voice
- `playwright` is in production dependencies (should be devDependencies)

### What decision is next
**Primary decision:** Merge PR #1 → main → connect Vercel → update Route 53 DNS → site goes live. This is the critical path. Everything else (content updates, mobile polish, SSG conversion) can happen after the domain is live.

**If Selam says "go live":** Merge PR #1, go to vercel.com, import `sygessese/gessese`, deploy, add `gessese.com` domain, update Route 53. No code changes required.

**If Selam says "not yet":** Work on content (photo, bio, music links, preorder link) on a new feature branch, run `/ship` to create a new PR, get approval, then go live.

### Dev environment quick-start
```bash
# All commands from /Users/gessese/gessese-v2
# Node 20 required — invoke directly:
/Users/gessese/.nvm/versions/node/v20.20.0/bin/node --version  # should print v20.20.0

# Start dev server (Claude Preview):
# Use preview_start with name "gessese-v2" in Claude

# Take screenshots:
/Users/gessese/.nvm/versions/node/v20.20.0/bin/node scripts/screenshot.mjs

# Publish a post:
# 1. Create src/content/posts/my-title.md with frontmatter (title, date, description)
# 2. git add . && git commit -m "post: title" && git push
```

### Key file locations
| What | Where |
|---|---|
| Dev server script | `/Users/gessese/gessese-v2/dev.sh` |
| CSS variables / palette | `src/app/globals.css` |
| Root layout (fonts, nav) | `src/app/layout.tsx` |
| Home page | `src/app/page.tsx` |
| Nav component | `src/components/Nav.tsx` |
| Silk orb animation | `src/components/SilkOrb.tsx` |
| Blog posts (markdown) | `src/content/posts/*.md` |
| Blog data utility | `src/lib/posts.ts` |
| Ship command | `.claude/commands/ship.md` |
| Screenshot script | `scripts/screenshot.mjs` |
