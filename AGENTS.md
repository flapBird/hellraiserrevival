# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Cloudflare deployment (user decision, 2026-10-12)

The production target is Cloudflare. Deployment path: Workers static assets only — `wrangler.json` points `assets.directory` at `dist/client`, declares no `main` or asset binding, the obsolete `worker/cf-worker.js` is removed, and `not_found_handling: "404-page"` serves the prerendered 404 page with a real 404 status (correct for SEO; do NOT switch to an SPA index fallback). `npm run deploy:cf` builds then deploys, `npm run preview:cf` runs wrangler dev. Alternative: Cloudflare Pages with build command `npm run build` and output directory `dist/client`. Keep Sites artifacts (`worker/index.js`, `.openai/hosting.json`, `dist/server/`) untouched — CF serves only `dist/client`. Caching/security headers live in `public/_headers` (hashed `assets/*` immutable, icons/robots/sitemap 4h, nosniff + referrer policy + X-Frame-Options on everything); it is copied to `dist/client` by the build. `tests/cloudflare.test.mjs` guards this wiring.

## Icon design decision

The favicon set (`public/favicon.ico`, `icon.svg`, `icon-96/192.png`, `apple-touch-icon.png`) is the brand gold cube (`#c5a16a` face tones) on the dark `#0e1013` rounded tile, matching the header brand mark. Sizes follow Google Search favicon rules: the linked icons are squares and multiples of 48px (ico 16/32/48, PNG 192). Keep these files square, on-brand, and linked in `index.html` (`rel="icon"` + `apple-touch-icon`) so the links propagate to every prerendered page via the prerender template.

## Analytics decision (user request, 2026-10-12)

The site loads Google Analytics (`G-4JJJXB57Y7`) and Microsoft Clarity (`yw1zcvsluk`) from a single guarded inline script in `index.html`. Hard rule: the scripts must never fire during local testing — the guard checks `location.hostname`/protocol and skips injection entirely on `localhost`, `127.0.0.1`, `::1`, `*.local`, private LAN IPs (10.x, 192.168.x, 172.16–31.x) and `file:` (no network requests at all). Keep this runtime guard; do not replace it with unconditioned snippet tags. GA and Clarity must also stay disclosed on the `/privacy/` page and in the generated `llms.txt`.

## Header & SEO conventions (user feedback, 2026-10-12)

- Production domain: **hellraiserrevival.help**. Shared `src/seo.js` defaults the origin to `https://hellraiserrevival.help` (`SITE_URL` env override still works). Both Vite's initial development HTML and prerendered production HTML must include one absolute, route-specific canonical, with matching og:url and structured-data URL. Omit queries and fragments from canonical URLs, and preserve the configured origin during client rendering. Keep sitemap URLs consistent and unknown pages noindex. Keep the domain visible in the footer bottom line and on the about/privacy pages.
- Hero headline must stay compact and clear of the hero artwork: Roboto Slab ~66px desktop (74px ≥1600, 56px ≤1250, 48px ≤980, clamp ≤700), max-width ~700–760px, no scaleX stretching. Hero sub-line ≤16px, search box ≤520px wide / 46px tall.
- Brand lockup is single-line and has no "GUIDES" suffix: gold cube + "HELLRAISER" (cream) + "REVIVAL" (red) baseline-aligned on one row, kept small and narrow — ~15px header / 12px footer (smaller at breakpoints), cube 34px header / 24px footer. Keep the a11y label "Hellraiser Revival Guides home" even though "GUIDES" is not displayed.
- Category strip stays single-line and compact: icons ~30px (26px at ≤1250/980, 22px ≤700), label + arrow on one row (no wrapping), strip padding-block ~16px.
- Header brand text must stay compact: wordmark ~20px (smaller at breakpoints), cube mark ~44px. Nav links use font-weight 500, not the default thin weight.
- SEO constraints are hard rules, enforced by `tests/content.test.mjs`: page titles ≤ 60 characters, meta descriptions ≤ 160 characters, exactly one `<h1>` per page, no skipped heading levels (h1 → h2 → h3).
- The site must explain the game itself: keep the homepage "NEW TO THE GAME?" brief section and the `beginners-guide` article ("What the game is & how to play") as the entry content for new players.

## Guide expansion (user-approved scope, 2026-10-12)

- Keep the homepage popular-guide entry compact and consistent with the current design. It links to the existing codes route plus Sister of Mercy, Zora and campaign length; preserve the beginner section.
- Cabinet, locker, safe and keypad codes share `/locker-codes/`, with room search, area filters, direct links, optional reveals and copying. Attribute reported answers and distinguish sources that cover fewer locations; do not claim independent playtesting.
- Sister of Mercy separates the stealth encounter from the boss fight. Zora covers shops and selected unlocks without late-story spoilers. Campaign length separates individual review runs from a guided trophy estimate.

## Readability & navigation (user feedback, 2026-10-12)

- Homepage section headings and guide/link-card titles must stay restrained: Inter, approximately 18px section headings (16px mobile), 16–18px card/subsection headings, moderate weight and tight letter spacing. Avoid the oversized Bodoni headings and widely spaced section labels shown in the rejected screenshots. Hero and brand typography retain their existing conventions.
- Important guides must be directly reachable from the top navigation. Codes is the first link, followed by walkthrough, puzzles, collectibles, Boss guide, Zora, trophies, PC fixes, playtime and the full library.
- Navigation gold indicates the current page only, using `aria-current="page"`; never permanently color Codes or visited destinations gold. Desktop, shortcut and mobile-menu links use cream text with an underline on hover, with a visible keyboard-focus outline. The current destination uses gold and an underline (user feedback, 2026-10-13).
- Keep the header visible while scrolling. At tablet/mobile widths, show Codes, Boss guide, Zora and All guides as a compact second navigation row; keep every destination in the menu as well.

- Apply the same restrained typography throughout inner pages: shared Inter h1 at 32px desktop, 30px tablet and 26px mobile; article/info/empty-state h2 at 20px desktop and 18px mobile; sidebar h3 at 16px. Keep heading levels intact, allow long titles to wrap naturally, and keep the article contents sidebar below the sticky header.

- Header navigation must remain readable: 16px desktop links, 14px tablet shortcuts, 13px mobile shortcuts and 15px menu links. Switch to the shortcut/menu layout at 1250px to give the ten links enough room.
- Homepage SEO title starts with `Hellraiser Revival Wiki` and uses a descriptive suffix within 60 characters: `Hellraiser Revival Wiki | Walkthrough, Codes & Guides`. Keep the HTML template, generated metadata and llms.txt consistent. Every page needs a unique, accurate SEO description within 160 characters; describe implemented coverage without claiming complete walkthroughs, independent playtesting or guaranteed crash fixes. Guide SEO descriptions are separate from compact UI card descriptions. This is the user-selected search positioning, not a claim of guaranteed rankings.
- Search uses the guide library as a full page, never a modal. Header search and `/` focus the library search field; results update inline, with a clear button and query/category/saved filters preserved in the URL for refresh, sharing and returning from articles.
