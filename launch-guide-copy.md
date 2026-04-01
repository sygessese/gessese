# Launch Your Resume

### Build a clean, beautiful personal website in under an hour. No coding experience needed.

---

## What You'll Get

By the end of this guide, you'll have:
- A professional resume/portfolio website live on the internet
- Your own custom URL (yourname.github.io or your own domain)
- A site you fully own and control — no subscriptions, no monthly fees
- The skills to update it anytime

**Total cost: Free** (GitHub Pages hosting) or ~$10/year if you want a custom domain.

---

## Choose Your Path

### Path 1: "I have a resume I like"
You'll upload your existing resume (PDF, Word, or text) to Claude and get a fully built website back. **~20 minutes.**

### Path 2: "I'm starting fresh"
You'll answer guided questions about your career, and Claude will build your site from your answers. **~30-40 minutes.**

Both paths end at the same place: a live, professional website.

---

## Before You Start

You'll need:
1. **A computer** (Mac, Windows, or Linux — doesn't matter)
2. **A web browser** (Chrome, Safari, Firefox, Edge — doesn't matter)
3. **Access to Claude** — go to [claude.ai](https://claude.ai) and create a free account if you don't have one
4. That's it.

---

# PART 1: Set Up GitHub (One Time — ~10 minutes)

GitHub is where your website lives. Think of it as a free filing cabinet on the internet that also happens to turn your files into a website.

## Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **"Sign up"**
3. Enter your email, create a password, and choose a username
   - **Your username matters** — it becomes part of your website URL: `yourusername.github.io`
   - Pick something professional (your name is ideal: `janedoe`, `jsmith`, etc.)
   - Keep it lowercase, no spaces
4. Complete the verification and click **"Create account"**
5. Check your email and verify your account

## Step 2: Create Your Website Repository

A "repository" (or "repo") is just a folder for your website files. You need one with a special name.

1. Once logged in, click the **"+"** button in the top-right corner
2. Click **"New repository"**
3. For **Repository name**, type exactly: `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username
   - Example: if your username is `janedoe`, type `janedoe.github.io`
   - **This exact naming is required** — it tells GitHub to turn this into a website
4. Make sure **"Public"** is selected (required for free GitHub Pages)
5. Check the box that says **"Add a README file"**
6. Click **"Create repository"**

You now have a home for your website. Let's fill it.

---

# PART 2: Build Your Website

This is where Claude does the heavy lifting. Pick your path.

---

## PATH 1: I Have a Resume

**You have a resume you're happy with (PDF, Word, Google Doc, or even just text).** Let's turn it into a website.

### Step 1: Get Your Resume Ready

- If it's a **PDF or Word doc**: you'll upload it directly to Claude
- If it's a **Google Doc**: download it as PDF first (File > Download > PDF)
- If it's **text in your head**: write it out in a notes app — even bullet points work

### Step 2: Open Claude and Upload

1. Go to [claude.ai](https://claude.ai)
2. Start a new conversation
3. Click the **paperclip icon** (📎) to attach your resume file
4. **Copy and paste the prompt below into Claude:**

---

#### THE PROMPT (Copy everything in the box below)

```
I'm attaching my resume. I want you to build me a complete, production-ready personal website from it.

Here's exactly what I need:

WEBSITE REQUIREMENTS:
- A single-page personal website that works as my online resume/portfolio
- Clean, modern, minimal design — think Apple-level polish
- Fully responsive (looks great on phones, tablets, and desktops)
- Smooth scrolling between sections
- A fixed navigation bar at the top
- Mobile hamburger menu
- Subtle animations on scroll (nothing flashy, just professional fade-ins)
- Dark/light mode toggle (optional but nice)
- Fast loading, no external dependencies besides Google Fonts

SECTIONS TO INCLUDE (in this order):
1. HERO — My name, title/headline, a one-line summary, and links to my LinkedIn/GitHub/email
2. ABOUT — A polished 2-3 sentence professional summary based on my resume
3. EXPERIENCE — My work history, formatted cleanly with company, role, dates, and key accomplishments
4. EDUCATION — Schools, degrees, dates, and any honors
5. SKILLS — A visual representation of my skills (clean tags, bars, or grouped categories — pick what fits best)
6. PROJECTS (if applicable) — Any notable projects from my resume
7. CONTACT — A simple way to reach me (email link, LinkedIn, etc.)

DESIGN DIRECTION:
- Color scheme: [Choose a professional palette that fits my industry — suggest one based on my resume's field]
- Font: Use a clean Google Font pairing (one for headings, one for body)
- Spacing: Generous whitespace, nothing cramped
- Style: Modern and minimal. No clip art, no stock photos, no cheese.

TECHNICAL REQUIREMENTS:
- Output THREE files only: index.html, style.css, script.js
- All code must be clean, well-commented, and easy to modify later
- No frameworks, no build tools, no npm — just pure HTML, CSS, and JavaScript
- Must work when opened directly in a browser (no server needed)
- Must work on GitHub Pages with zero configuration

IMPORTANT:
- Use my actual information from the resume. Don't use placeholder text.
- If my resume is missing something (like a professional summary), write one based on the content you have.
- Make it look like a $5,000 custom website, not a free template.

Please generate all three files with the complete code. Start with index.html, then style.css, then script.js.
```

---

### Step 3: Review What Claude Gives You

Claude will generate three files:
- `index.html` — your website's structure and content
- `style.css` — how it looks (colors, fonts, layout)
- `script.js` — interactive features (smooth scroll, mobile menu, animations)

**Read through the content** to make sure:
- Your name and info are correct
- Job titles and dates are right
- Nothing important from your resume was missed
- The overall tone feels like *you*

### Step 4: Customize (Optional)

Not 100% happy? Tell Claude what to change. Here are some prompts you can use:

**Change colors:**
```
Change the color scheme to [navy and gold / black and white / earth tones / etc.]
```

**Change layout:**
```
Move the skills section above experience. Also make the hero section taller with a centered layout.
```

**Add a section:**
```
Add a "Certifications" section between Education and Skills with the following: [your certs]
```

**Change the vibe:**
```
This feels too corporate. Make it feel more creative/startup-y/minimal/bold.
```

**Add a profile photo:**
```
Add a circular profile photo to the hero section. I'll replace the placeholder image later. Use a 200x200 circle with a subtle border.
```

Keep iterating until you love it. There's no limit.

---

## PATH 2: Starting Fresh

**You don't have a resume, or you want to build something different.** Let's figure out what your website should be.

### Step 1: Answer These Questions

Open a notes app and answer the following. Don't overthink it — bullet points are fine.

#### The Basics
- What's your full name?
- What's your professional title or the title you're going for? (e.g., "Software Engineer", "Graphic Designer", "Marketing Manager", "Nursing Student")
- Write a one-line summary of who you are professionally (e.g., "Creative designer with 5 years of experience building brands people love")

#### Your Experience
For each job/role (start with most recent):
- Company/Organization name
- Your title
- Start date — End date (or "Present")
- 2-4 bullet points about what you did and what you achieved
- (If you're a student or new to the workforce, include internships, volunteer work, campus organizations, or relevant projects)

#### Your Education
For each school:
- School name
- Degree and major
- Graduation year (or expected)
- Any honors, GPA (if strong), or relevant coursework

#### Your Skills
List your skills in groups:
- Technical skills (tools, software, languages)
- Professional skills (leadership, communication, project management)
- Industry-specific skills

#### Your Contact Info
- Email address
- LinkedIn URL (if you have one)
- GitHub URL (if applicable)
- Portfolio URL (if applicable)
- City/State (optional — no full address needed)

#### Your Style Preference
Pick the vibe that fits you best:
- **Clean & Minimal** — lots of whitespace, simple, elegant (good for: business, finance, consulting)
- **Bold & Modern** — strong colors, big typography, high contrast (good for: tech, startups, marketing)
- **Creative & Expressive** — unique layouts, artistic touches, personality-forward (good for: design, arts, media)
- **Classic & Professional** — traditional, trustworthy, polished (good for: law, medicine, academia, government)

### Step 2: Give It All to Claude

1. Go to [claude.ai](https://claude.ai)
2. Start a new conversation
3. **Copy the prompt below, fill in your answers, and paste it into Claude:**

---

#### THE PROMPT (Copy and fill in the brackets)

```
Build me a complete personal website with the following information. I want a production-ready site I can deploy immediately.

MY INFO:
Name: [Your full name]
Title: [Your professional title]
Summary: [Your one-line summary]

EXPERIENCE:
[Paste your experience from Step 1]

EDUCATION:
[Paste your education from Step 1]

SKILLS:
[Paste your skills from Step 1]

CONTACT:
Email: [your email]
LinkedIn: [your URL or "none"]
GitHub: [your URL or "none"]

DESIGN STYLE: [Clean & Minimal / Bold & Modern / Creative & Expressive / Classic & Professional]

COLOR PREFERENCE: [Any specific colors you like? Or say "surprise me with something professional"]

WEBSITE REQUIREMENTS:
- A single-page personal website
- Clean, modern, responsive design — looks great on all devices
- Fixed navigation bar with smooth scrolling
- Mobile hamburger menu
- Subtle scroll animations
- Sections: Hero, About, Experience, Education, Skills, Contact
- No frameworks — pure HTML, CSS, and JavaScript only
- Must work on GitHub Pages with zero configuration
- Output THREE files: index.html, style.css, script.js
- Use my actual information, not placeholder text
- Make it look premium — like a custom-built site, not a template

Generate all three files with complete code.
```

---

### Step 3: Review and Customize

Same as Path 1, Step 3 & 4. Read through everything, check your info, and tell Claude to adjust anything you don't love.

---

# PART 3: Put Your Website Online (~5 minutes)

You now have three files from Claude. Let's put them on the internet.

## Step 1: Copy Your Files

For each file Claude generated (`index.html`, `style.css`, `script.js`):

1. Click the **"Copy"** button on the code block in Claude (it's in the top-right corner of each code block)
2. Open a simple text editor:
   - **Mac**: Open TextEdit, then go to Format > Make Plain Text (important!)
   - **Windows**: Open Notepad
   - **Or use**: [VS Code](https://code.visualstudio.com/) (free, better, but optional)
3. Paste the code
4. Save the file with the exact name:
   - `index.html`
   - `style.css`
   - `script.js`
5. Save them all in the same folder on your computer

## Step 2: Preview Your Site Locally (Optional but Recommended)

Before going live, check how it looks:

1. Find your `index.html` file in your folder
2. Double-click it — it'll open in your browser
3. This is exactly how your website will look online
4. If something's off, go back to Claude and ask for changes

## Step 3: Upload to GitHub

1. Go to your repository on GitHub (`github.com/yourusername/yourusername.github.io`)
2. Click **"Add file"** > **"Upload files"**
3. Drag all three files (`index.html`, `style.css`, `script.js`) into the upload area
4. At the bottom, click **"Commit changes"**
5. That's it. Your files are now on GitHub.

## Step 4: Turn On GitHub Pages

1. In your repository, click **"Settings"** (the gear icon tab)
2. In the left sidebar, click **"Pages"**
3. Under **"Source"**, make sure it says **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** and **"/ (root)"**
5. Click **"Save"**
6. Wait 1-2 minutes

## Step 5: See Your Live Website

Go to: `https://yourusername.github.io`

**Your website is live.** Share it with the world.

---

# PART 4: Level Up (Optional)

## Add a Profile Photo

1. Find a professional photo of yourself
2. Rename it to `profile.jpg` (or `profile.png`)
3. Upload it to your GitHub repo the same way you uploaded your other files
4. If Claude's code already has an image placeholder, it'll work automatically
5. If not, ask Claude:

```
Update my index.html to include a profile photo in the hero section. The image file is called profile.jpg and it's in the same folder as index.html. Make it a circular photo, about 200px, with a subtle shadow.
```

## Add a Custom Domain ($10-15/year)

Want `www.yourname.com` instead of `yourusername.github.io`?

1. **Buy a domain** from [Namecheap](https://namecheap.com), [Google Domains](https://domains.google), or [Cloudflare](https://cloudflare.com)
2. **In your GitHub repo**, create a file called `CNAME` (no extension) containing just your domain:
   ```
   www.yourname.com
   ```
3. **In your domain registrar's DNS settings**, add these records:
   - Type: `A`, Name: `@`, Value: `185.199.108.153`
   - Type: `A`, Name: `@`, Value: `185.199.109.153`
   - Type: `A`, Name: `@`, Value: `185.199.110.153`
   - Type: `A`, Name: `@`, Value: `185.199.111.153`
   - Type: `CNAME`, Name: `www`, Value: `yourusername.github.io`
4. **In GitHub Pages settings**, enter your custom domain and check **"Enforce HTTPS"**
5. Wait up to 24 hours for DNS to propagate (usually much faster)

## Add a Favicon

Ask Claude:
```
Generate a simple, clean favicon for my site using my initials [XX]. Give me the HTML to add to my index.html and an SVG I can use as the favicon.
```

## Add Google Analytics (Track Visitors)

Ask Claude:
```
Add Google Analytics to my index.html. My tracking ID is [G-XXXXXXXXXX]. Add it in a privacy-friendly way.
```

*(You'll need to set up a free Google Analytics account first at [analytics.google.com](https://analytics.google.com))*

---

# PART 5: The Full Stack Upgrade — Next.js + Vercel + Supabase

GitHub Pages is great for a static resume. But maybe you want more: a real blog, a comments section where readers can respond, analytics that show you who's visiting, and a site that auto-deploys every time you make a change.

This part walks you through building exactly that. It's what powers **gessese.com** — a personal creative site with a blog, a reader comments system, and full visitor analytics. Every step is either a copy-paste Claude command or a clear click-by-click instruction.

**Cost: Free.** All three services (Vercel, Supabase, Vercel Analytics) have generous free tiers more than sufficient for a personal site.

---

## What You're Building

| Feature | Powered by |
|---|---|
| The site itself (pages, blog, nav) | Next.js (a React framework) |
| Hosting + auto-deploy on push | Vercel |
| Visitor analytics + click tracking | Vercel Analytics |
| Comments from readers | Supabase (free hosted database) |

**How it works in one sentence:** You write your blog posts as plain text files, push them to GitHub, and Vercel automatically puts them live. Readers can leave comments — those go into Supabase. You see all your analytics in the Vercel dashboard.

---

## Step 1: Install Two Tools on Your Computer

You'll need two programs installed before Claude can build your site.

---

**YOU DO THIS — Install Node.js:**

1. Go to [nodejs.org](https://nodejs.org)
2. Click the big green button that says **"LTS"** (the stable version)
3. Download the installer and run it — click through all the defaults
4. When it finishes, open a Terminal (Mac: search "Terminal" in Spotlight; Windows: search "Command Prompt") and type:
   ```
   node --version
   ```
5. If you see a number like `v20.x.x`, you're done ✓

---

**YOU DO THIS — Install VS Code (code editor):**

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download and install it — click through all the defaults
3. This is where Claude Code will live while building your site

---

## Step 2: Build Your Site with Claude

Open [Claude.ai](https://claude.ai) (or the Claude desktop app). Start a new conversation. **Copy the entire prompt below**, fill in the `[brackets]` with your own information, and send it.

---

**CLAUDE PROMPT — Build my Next.js personal site:**

```
Build me a complete personal website using Next.js 16 with TypeScript. This will be deployed on Vercel.

MY INFORMATION:
Name: [Your full name]
Tagline: [e.g. "POET . MUSICIAN . WRITER" or "DESIGNER . PHOTOGRAPHER" — 2-4 words that define you]
About me (2-3 sentences): [Write a short bio about yourself]
Pages I want: [List the sections you want, e.g. "Home, Writing/Blog, Music, About, Work/Resume"]

DESIGN DIRECTION:
[Describe your aesthetic — e.g. "Minimal and editorial, lots of whitespace, serif fonts, feels timeless not trendy" or "Bold and modern, dark background, strong typography" or "Clean and professional, classic, trustworthy"]

TECHNICAL REQUIREMENTS — follow all of these exactly:
- Next.js 16 with App Router and TypeScript
- Tailwind CSS v4
- Use --webpack flag (NOT Turbopack) in the dev script
- Framer Motion for animations (subtle fade-in on page load, nothing flashy)
- Google Fonts via next/font/google (pick fonts that match my design direction)
- Fixed navigation bar at the top with frosted glass background (rgba white + backdrop-filter blur)
- Mobile responsive nav: on small screens, name stacks as two lines on the left, links scroll horizontally to the right
- A markdown blog pipeline: posts live in src/content/posts/*.md with frontmatter (title, date, description). Create src/lib/posts.ts to read them. Create API routes at /api/posts and /api/posts/[slug].
- @vercel/analytics installed and <Analytics /> added to src/app/layout.tsx
- track() calls from @vercel/analytics on every important link and button (nav links, any CTAs, external links)
- A dev.sh script that runs the dev server using the full Node.js path from nvm (not system npm)
- A .claude/launch.json that starts the dev server using /bin/bash and dev.sh
- Create a sample blog post in src/content/posts/ so I can see it working

Please build the complete project — all files, all pages. When you're done, tell me how to start the dev server to preview it.
```

---

Claude will build the entire project. This takes a few minutes. When it's done, it will tell you how to run the site locally so you can see it before going live.

**To preview your site:** Follow Claude's instructions (usually: open a terminal, navigate to your project folder, and run the dev server command it gives you). Your site will appear at `http://localhost:3000`.

---

## Step 3: Push Your Site to GitHub

You need a GitHub repository for your new site. This is separate from your `yourusername.github.io` resume repo from Part 1 — give it any name you like (e.g., `my-site`, `portfolio-v2`).

---

**YOU DO THIS — Create a new GitHub repo:**

1. Go to [github.com](https://github.com) → click the **"+"** icon → **"New repository"**
2. Name it anything (e.g., `my-site`) — it doesn't need the special `.github.io` name this time
3. Make it **Public**
4. **Do NOT** check "Add a README file" — leave it empty
5. Click **"Create repository"**
6. Copy the URL it shows you (looks like `https://github.com/yourusername/my-site.git`)

---

**CLAUDE PROMPT — Push my project to GitHub:**

```
Push my project to GitHub. The remote repository URL is:
https://github.com/[YOUR USERNAME]/[YOUR REPO NAME].git

Initialize git, add all files, commit with message "initial build", add the remote, and push to main.
```

---

## Step 4: Deploy to Vercel (Auto-Deploy on Every Push)

Vercel watches your GitHub repo. Every time you push a change, it automatically rebuilds and redeploys your site. No manual uploads, ever.

---

**YOU DO THIS — Create a Vercel account:**

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

---

**YOU DO THIS — Import your project:**

1. Once logged in, click **"Add New…"** → **"Project"**
2. Find your repo in the list (e.g., `my-site`) → click **"Import"**
3. Vercel auto-detects that it's a Next.js project — leave all settings as-is
4. Click **"Deploy"**
5. Wait about 1 minute
6. Your site is live at `yourproject.vercel.app` 🎉

---

**YOU DO THIS — Note where Environment Variables live (you'll need this soon):**

1. In your Vercel project, click the **"Settings"** tab
2. Click **"Environment Variables"** in the left sidebar
3. Keep this tab open — you'll add your Supabase keys here in Step 7

---

## Step 5: Connect Your Custom Domain

Already have a domain from Part 4? Point it to Vercel instead of GitHub Pages.

---

**YOU DO THIS:**

1. In your Vercel project → **Settings** tab → **Domains**
2. Type your domain (e.g., `yourname.com`) → click **"Add"**
3. Vercel shows you DNS records — keep this tab open
4. Go to wherever you bought your domain (Namecheap, Google Domains, Cloudflare, GoDaddy, etc.)
5. Find **DNS Settings** or **Manage DNS**
6. Add the records exactly as Vercel shows them (usually two A records and one CNAME)
7. Come back to Vercel — it will show a green checkmark once DNS propagates (usually within minutes, up to 24 hours max)

---

## Step 6: Enable Vercel Analytics

Vercel Analytics shows you how many people visit your site, where they're from, what device they use, and which links they click.

The code was already added in Step 2 (the Claude prompt included it). This step just flips the switch in the Vercel dashboard.

---

**YOU DO THIS:**

1. Go to your Vercel project dashboard
2. Click the **"Analytics"** tab at the top
3. Click **"Enable Analytics"**
4. Done — page views start tracking immediately

To see click events (like which music platform link got clicked, which CTA was tapped), look under **"Custom Events"** in the Analytics tab. These start populating as real visitors use your site.

---

## Step 7: Set Up Supabase (Reader Comments)

Supabase is a free hosted database. When a reader leaves a comment on one of your blog posts, it gets stored there. You can view and delete comments from the Supabase dashboard.

### Step A — Create your Supabase account and project

---

**YOU DO THIS:**

1. Go to [supabase.com](https://supabase.com) → click **"Start your project"** → sign in with GitHub
2. Click **"New project"**
3. Give it a name (e.g., `my-site-db`)
4. Set a database password (save it somewhere — you'll need it if you ever connect directly to the database)
5. Choose the region closest to you
6. Click **"Create new project"**
7. Wait about 2 minutes for it to set up — you'll see a loading screen

---

### Step B — Create the comments table

---

**YOU DO THIS:**

1. In the Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste this entire block into the editor:

```sql
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_slug VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_comments_slug ON comments(post_slug);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read comments" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert comments" ON comments
  FOR INSERT WITH CHECK (
    char_length(name) > 0 AND char_length(name) <= 100
    AND char_length(body) > 0 AND char_length(body) <= 5000
  );
```

4. Click the green **"Run"** button
5. You should see **"Success. No rows returned."** — that means it worked ✓

---

### Step C — Get your API keys

---

**YOU DO THIS:**

1. In Supabase, click **"Settings"** (the gear icon) in the left sidebar
2. Click **"API"**
3. Under **"Project URL"** — copy the full URL (looks like `https://abcdefghij.supabase.co`). This is your `NEXT_PUBLIC_SUPABASE_URL`.
4. Under **"Project API keys"** → find the row labeled **"anon public"** → click **"Copy"** to copy the key. This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

> **Why is it safe to share the anon key?** It's designed to be public. The security comes from the RLS (Row Level Security) policies you just created in Step B — they control exactly what anyone can and can't do. The key below it labeled "service_role" is the admin key — **never put that one in your code or share it.**

---

### Step D — Add keys to Vercel

---

**YOU DO THIS:**

1. Go back to your Vercel project → **Settings** → **Environment Variables**
2. Click **"Add New"**
3. Name: `NEXT_PUBLIC_SUPABASE_URL` → Value: paste your project URL → click **"Save"**
4. Click **"Add New"** again
5. Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Value: paste your anon key → click **"Save"**
6. Go to the **"Deployments"** tab → find your latest deployment → click the **"…"** menu → click **"Redeploy"** (so the new environment variables take effect)

---

### Step E — Add keys locally and wire up the comments system

---

**CLAUDE PROMPT — Add Supabase environment variables:**

```
Add my Supabase environment variables to this project.

Create a .env.local file (gitignored) with these exact values:
NEXT_PUBLIC_SUPABASE_URL=[PASTE YOUR SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[PASTE YOUR SUPABASE ANON KEY]
```

---

**CLAUDE PROMPT — Build the full comments system:**

```
Add a complete Supabase-backed comments system to my Next.js site. Here's exactly what I need:

1. Install @supabase/supabase-js

2. Create src/lib/supabase.ts:
   - Import createClient from @supabase/supabase-js
   - Initialize with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
   - Export the client

3. Create src/app/api/comments/route.ts (POST endpoint):
   - Accept JSON body: { slug, name, email, body }
   - Validate: slug required, name required (1-100 chars), body required (1-5000 chars), email optional
   - Strip HTML tags from name and body to prevent injection attacks
   - Rate limit: max 3 comments per IP per 10 minutes (use an in-memory Map)
   - Insert into Supabase comments table
   - Return 201 on success, 429 if rate limited, 400 on validation error, 500 on database error

4. Create src/app/api/comments/[slug]/route.ts (GET endpoint):
   - Await params (Next.js 16 pattern: const { slug } = await params)
   - Query Supabase: select id, name, body, created_at from comments where post_slug = slug, order by created_at ascending
   - Return JSON array of comments

5. Create src/components/Comments.tsx:
   - "use client" component
   - Props: { slug: string }
   - On mount: fetch GET /api/comments/${slug} and display comments
   - Each comment: show name, date (formatted nicely), and body text
   - Comment form below: Name input (required), Email input (optional, explain it won't be shown publicly), textarea for comment body (required)
   - POST to /api/comments on submit
   - Show loading state while submitting
   - Show success message "Comment posted." on success (clear form)
   - Show error message on failure
   - Design should match the rest of the site

6. In src/app/writing/[slug]/page.tsx:
   - Import Comments from "@/components/Comments"
   - Add <Comments slug={slug} /> below the post body content
   - Import track from @vercel/analytics and call track("comment_posted", { slug }) on successful submission (add this inside Comments.tsx)

After making all these changes, push everything to GitHub.
```

---

When Claude is done, Vercel will auto-deploy. Your blog posts will now have a live comments section.

---

## Step 8: Moderate Comments

Comments appear immediately when posted — there's no approval queue. To delete spam:

---

**YOU DO THIS:**

1. Go to [supabase.com](https://supabase.com) → your project → **"Table Editor"** in the left sidebar
2. Click the **"comments"** table
3. Find the spam row → click the checkbox next to it → click **"Delete"** at the top

That's your entire moderation dashboard.

---

## Step 9: Publishing and Managing Your Site

Here's your day-to-day workflow once everything is set up:

**To publish a new blog post:**

**CLAUDE PROMPT:**
```
Create a new blog post for my site.

Title: [Your post title]
Date: [Today's date, e.g. 2026-03-01]
Description: [One sentence summary]

Content:
[Paste your post content here]

Create the file at src/content/posts/[title-as-slug].md with proper frontmatter, then push it to GitHub.
```

Vercel deploys it automatically — your post is live in about 1 minute.

---

**To update your site design or content:**

**CLAUDE PROMPT:**
```
[Describe what you want to change. Be specific — e.g. "Change my accent color from purple to gold", "Add a new section to the home page about my podcast", "Update the bio text on the About page to: [new text]"]

After making the changes, push to GitHub.
```

---

**To check your analytics:**

**YOU DO THIS:**
1. Go to [vercel.com](https://vercel.com) → your project → **"Analytics"** tab
2. See page views, visitors by country and city, device types, and custom click events

---

**To check or delete comments:**

**YOU DO THIS:**
1. Go to [supabase.com](https://supabase.com) → your project → **"Table Editor"** → **"comments"** table

---

# Troubleshooting

## "My site shows the README, not my website"
- Make sure your main file is named exactly `index.html` (lowercase)
- Make sure it's in the root of the repo, not inside a folder

## "My site looks broken / unstyled"
- Make sure `style.css` and `script.js` are in the same folder as `index.html`
- Check that the filenames in your HTML match exactly: `<link href="style.css">` and `<script src="script.js">`

## "Changes aren't showing up"
- GitHub Pages can take 1-5 minutes to update
- Try a hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check the "Actions" tab in your repo to see if the deployment is still running

## "My images aren't loading"
- Make sure image files are uploaded to the repo
- File names are case-sensitive: `Photo.jpg` is not the same as `photo.jpg`
- Use relative paths: `src="profile.jpg"` not `src="C:/Users/me/photo.jpg"`

## "I want to make changes to my site"
- You can edit files directly on GitHub: click the file, then click the pencil icon
- Or upload new versions of your files (they'll overwrite the old ones)
- Or paste your current code back into Claude and ask for changes

---

# Quick Reference: Useful Claude Prompts

## Change the overall design
```
Here's my current website code. [paste your code] Redesign it with a [minimalist/bold/creative/corporate] style. Keep all my information the same but completely change the visual design.
```

## Add a new section
```
Add a [Certifications / Volunteer Work / Publications / Testimonials] section to my website. Here's the content: [your content]. Match the existing design style.
```

## Make it more ATS-friendly
```
Review my website content and suggest improvements to make it more appealing to recruiters and ATS systems in the [your industry] field.
```

## Create a printable version
```
Add a print stylesheet to my site so it looks good when someone prints the page or saves it as a PDF. Hide the navigation and decorative elements in print.
```

## Add multiple pages
```
I want to add a separate Projects page to my site. Create a projects.html file that matches my existing design. Here are my projects: [list your projects]. Also update the navigation in index.html to link to the new page.
```

---

# Career-Specific Tips

## For Tech / Engineering
- Include a GitHub link prominently
- Add a Projects section with live demo links
- Show technical skills with specific tools and languages
- Consider adding a "What I'm Learning" section

## For Design / Creative
- Make the design itself your portfolio piece
- Use bolder colors and more creative layouts
- Include thumbnails that link to your work
- Consider a separate portfolio/gallery page

## For Business / Finance / Consulting
- Keep it clean and conservative
- Lead with results and metrics in your experience
- Include certifications and relevant coursework
- Use a classic color palette (navy, white, gold)

## For Healthcare / Science / Academia
- Include publications and research
- List certifications and licenses prominently
- Use a trustworthy, professional design
- Consider adding a "Research Interests" section

## For Students / Career Changers
- Lead with education and relevant coursework
- Include projects, volunteer work, and extracurriculars
- Add a clear "objective" or "about" section explaining your direction
- Skills section is your best friend — show what you know

---

# Updates & Changelog

This is a living guide. As new features and improvements are added, they'll appear here.

**v1.0** — Initial release
- Two paths: Resume upload and guided questionnaire
- GitHub Pages deployment
- Customization prompts
- Career-specific tips

---

*Built with Claude. Hosted free on GitHub Pages.*
*Have questions? [Contact info / support email here]*
