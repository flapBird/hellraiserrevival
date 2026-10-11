# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Cloudflare deployment (user decision, 2026-10-12)

The production target is Cloudflare. Deployment path: Workers static assets — `wrangler.json` points `assets.directory` at `dist/client`, `main` is `worker/cf-worker.js` (a pass-through `env.ASSETS.fetch`), and `not_found_handling: "404-page"` serves the prerendered 404 page with a real 404 status (correct for SEO; do NOT switch to an SPA index fallback). `npm run deploy:cf` builds then deploys, `npm run preview:cf` runs wrangler dev. Alternative: Cloudflare Pages with build command `npm run build` and output directory `dist/client`. Keep Sites artifacts (`worker/index.js`, `.openai/hosting.json`, `dist/server/`) untouched — CF serves only `dist/client`. Caching/security headers live in `public/_headers` (hashed `assets/*` immutable, icons/robots/sitemap 4h, nosniff + referrer policy + X-Frame-Options on everything); it is copied to `dist/client` by the build. `tests/cloudflare.test.mjs` guards this wiring.

## Icon design decision

The favicon set (`public/favicon.ico`, `icon.svg`, `icon-96/192.png`, `apple-touch-icon.png`) is the brand gold cube (`#c5a16a` face tones) on the dark `#0e1013` rounded tile, matching the header brand mark. Sizes follow Google Search favicon rules: the linked icons are squares and multiples of 48px (ico 16/32/48, PNG 192). Keep these files square, on-brand, and linked in `index.html` (`rel="icon"` + `apple-touch-icon`) so the links propagate to every prerendered page via the prerender template.

## Analytics decision (user request, 2026-10-12)

The site loads Google Analytics (`G-4JJJXB57Y7`) and Microsoft Clarity (`yw1zcvsluk`) from a single guarded inline script in `index.html`. Hard rule: the scripts must never fire during local testing — the guard checks `location.hostname`/protocol and skips injection entirely on `localhost`, `127.0.0.1`, `::1`, `*.local`, private LAN IPs (10.x, 192.168.x, 172.16–31.x) and `file:` (no network requests at all). Keep this runtime guard; do not replace it with unconditioned snippet tags. GA and Clarity must also stay disclosed on the `/privacy/` page and in the generated `llms.txt`.

## Header & SEO conventions (user feedback, 2026-10-12)

- Production domain: **hellraiserrevival.help**. `scripts/prerender.mjs` defaults `SITE_URL` to `https://hellraiserrevival.help` (env override still works), so canonical URLs, og:url, og:image and sitemap.xml point there. Keep the domain visible in the footer bottom line and on the about/privacy pages.
- Hero headline must stay compact and clear of the hero artwork: Roboto Slab ~66px desktop (74px ≥1600, 56px ≤1250, 48px ≤980, clamp ≤700), max-width ~700–760px, no scaleX stretching. Hero sub-line ≤16px, search box ≤520px wide / 46px tall.
- Brand lockup is single-line and has no "GUIDES" suffix: gold cube + "HELLRAISER" (cream) + "REVIVAL" (red) baseline-aligned on one row, ~19px header / 15px footer (smaller at breakpoints). Keep the a11y label "Hellraiser Revival Guides home" even though "GUIDES" is not displayed.
- Category strip stays single-line and compact: icons ~30px (26px at ≤1250/980, 22px ≤700), label + arrow on one row (no wrapping), strip padding-block ~16px.
- Header brand text must stay compact: wordmark ~20px (smaller at breakpoints), cube mark ~44px. Nav links use font-weight 500, not the default thin weight.
- SEO constraints are hard rules, enforced by `tests/content.test.mjs`: page titles ≤ 60 characters, meta descriptions ≤ 160 characters, exactly one `<h1>` per page, no skipped heading levels (h1 → h2 → h3).
- The site must explain the game itself: keep the homepage "NEW TO THE GAME?" brief section and the `beginners-guide` article ("What the game is & how to play") as the entry content for new players.
