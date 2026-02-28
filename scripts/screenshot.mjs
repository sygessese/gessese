/**
 * Auto-discovers all routes from src/app directory + content sources,
 * then screenshots each one and saves to .pr-assets/screenshots/.
 *
 * Static routes  → inferred from src/app folder structure
 * Dynamic routes → param values resolved from real data sources
 *
 * To add a new dynamic route, add a resolver in DYNAMIC_RESOLVERS below.
 */

import { chromium } from 'playwright';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { join, relative } from 'path';

const ROOT     = new URL('..', import.meta.url).pathname;
const APP_DIR  = join(ROOT, 'src/app');
const OUT      = join(ROOT, '.pr-assets/screenshots');
const BASE_URL = 'http://localhost:3000';

mkdirSync(OUT, { recursive: true });

// ─── Dynamic route resolvers ──────────────────────────────────────────────────
// When the scanner finds a [param] segment, it calls the matching resolver
// to get the real values to screenshot. Add new ones here as you build.
//
// Key format:  "<parent-route>/<[param]>"  →  () => string[]

const DYNAMIC_RESOLVERS = {
  '/writing/[slug]': () => {
    const postsDir = join(ROOT, 'src/content/posts');
    return readdirSync(postsDir)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace(/\.md$/, ''));
  },
};

// ─── Route discovery ──────────────────────────────────────────────────────────
function discoverRoutes(dir, routePath = '') {
  const entries = readdirSync(dir);
  const routes  = [];

  // If this directory contains a page file, it's a real route
  const hasPage = entries.some(e =>
    /^page\.(tsx?|jsx?)$/.test(e)
  );
  if (hasPage) {
    // Skip (root) API routes and private segments
    const isApi     = routePath.startsWith('/api');
    const isPrivate = routePath.split('/').some(s => s.startsWith('_'));
    if (!isApi && !isPrivate) {
      routes.push(routePath || '/');
    }
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (!statSync(fullPath).isDirectory()) continue;
    if (entry === 'api' || entry.startsWith('_')) continue;

    // Dynamic segment e.g. [slug], (group), etc.
    if (entry.startsWith('[') && entry.endsWith(']')) {
      const resolverKey = `${routePath}/${entry}`;
      const resolver    = DYNAMIC_RESOLVERS[resolverKey];

      if (!resolver) {
        console.warn(`⚠️  No resolver for dynamic segment ${resolverKey} — skipping`);
        continue;
      }

      const values = resolver();
      for (const value of values) {
        // Recurse into the dynamic segment with the real value
        routes.push(...discoverRoutes(fullPath, `${routePath}/${value}`));
      }
      continue;
    }

    // Route group segments like (marketing) — transparent in URLs
    if (entry.startsWith('(') && entry.endsWith(')')) {
      routes.push(...discoverRoutes(fullPath, routePath));
      continue;
    }

    routes.push(...discoverRoutes(fullPath, `${routePath}/${entry}`));
  }

  return routes;
}

// ─── Screenshot all discovered routes ─────────────────────────────────────────
const routes = discoverRoutes(APP_DIR);

console.log(`\n🗺  Discovered ${routes.length} routes:\n${routes.map(r => `   ${r}`).join('\n')}\n`);

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

for (const route of routes) {
  // Turn route into a safe filename e.g. /writing/on-beginning-again → writing__on-beginning-again
  const filename = (route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '__')) + '.png';
  const url      = `${BASE_URL}${route}`;

  console.log(`📸  ${route.padEnd(40)} → ${filename}`);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1400); // let Framer Motion settle
  await page.screenshot({ path: join(OUT, filename), fullPage: false });
}

await browser.close();
console.log(`\n✅  ${routes.length} screenshots saved to .pr-assets/screenshots/\n`);
