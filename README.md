# Hellraiser Revival Wiki

**Live site: [https://hellraiserrevival.help](https://hellraiserrevival.help)**

An independent, English-language fan guide for Clive Barker's *Hellraiser: Revival*. Source-linked walkthrough notes, puzzle solutions, locker codes, collectibles and PC troubleshooting — with optional spoiler reveals, a saved firearm checklist and local bookmarks. Not affiliated with or endorsed by Saber Interactive, Boss Team Games or Clive Barker; artwork is AI-generated illustration, not gameplay footage.

## Pages

| Path | Content |
| --- | --- |
| `/` | Hero search, direct top navigation, popular guides, six categories and a game brief for new players |
| `/guides/` | Inline live search with category/saved filters and URL persistence; header search and `/` focus this page instead of a popup |
| `/beginners-guide/` | What the game is & how to play |
| `/walkthrough/` | Opening objectives and route notes |
| `/puzzles/`, `/genesis-configuration/` | Puzzle mechanisms with hint-first reveals |
| `/locker-codes/` | Ten reported lock combinations, room search, area filters, direct jumps and reveal/copy buttons |
| `/sister-of-mercy/` | Stealth encounter and boss-fight tactics |
| `/zora/` | Shop locations, selected stock and buying priorities |
| `/how-long-to-beat/` | Campaign reports, guided Platinum estimate and session planning |
| `/collectibles/` | Collectible groups and a saved firearm checklist |
| `/trophies/` | Completion roadmap and reported missables |
| `/crashing-fix/` | PC requirements and Steam file verification |
| `/about/`, `/privacy/` | Editorial policy; local storage & analytics disclosure |
| `/404/` | Prerendered not-found page |

## Tech

- React 19 + Vite 6, plain CSS (`src/styles.css`), Phosphor icons
- Fully prerendered static output: `npm run build` renders every route (plus `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt`) with `react-dom/server` in `scripts/prerender.mjs`
- All guide content lives in `src/content.js` — edit `seoTitle`/`seoDescription` for search metadata and `description` for compact UI cards; metadata and the sitemap regenerate on build
- Shared SEO metadata in `src/seo.js` and head rendering in `scripts/seo-head.mjs` serve route-specific canonicals, titles, descriptions, Open Graph and structured data in both initial Vite HTML and prerendered production pages
- Client-side extras (search, filters, bookmarks, code copy) hydrate on top of the static HTML
- Internal navigation keeps the header mounted and switches pages without reloading; SEO, browser history, scroll positions and URL-based search filters update with the current route (`src/navigation.js`)

## Local development

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # production build into dist/client (+ Sites artifacts)
npm run preview    # serve dist/ on http://localhost:4173 — view-source here to see the prerendered HTML
npm test           # content, SEO limits, Cloudflare wiring and Sites packaging tests
```

## Deployment (Cloudflare)

The production target is Cloudflare Workers static assets:

```bash
npx wrangler login # once
npm run deploy:cf  # build + wrangler deploy (config in wrangler.json)
npm run preview:cf # local wrangler preview of the built site
```

- Static assets only: no `main`, asset binding or custom Cloudflare Worker script. The retired `worker/cf-worker.js` is removed; the separate Sites runtime remains intact. `wrangler.json` serves `dist/client`, normalizes trailing slashes and returns the prerendered `404.html` with a real 404 status for unknown routes.
- `public/_headers` adds caching (immutable hashed assets, 4h for icons/robots/sitemap) and security headers.
- Canonical URLs, `og:` metadata and the sitemap default to `https://hellraiserrevival.help` (`SITE_URL` env overrides). Query strings and fragments are omitted from canonical URLs; guide-library search variants use `/guides/`. Unknown routes retain the noindex 404 metadata.
- Alternative: Cloudflare Pages with build command `npm run build` and output directory `dist/client`.

## Conventions

- SEO is test-enforced: page titles ≤ 60 characters, meta descriptions ≤ 160, exactly one `<h1>` per page, no skipped heading levels.
- Google Search favicon rules: square icons, 48px multiples (`favicon.ico` 16/32/48, PNG 192).
- Analytics (GA + Microsoft Clarity) load from one guarded inline script in `index.html` and never fire on local hosts; disclosed on `/privacy/`.
- `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs` and `tests/sites-worker.test.mjs` support an alternative OpenAI Sites handoff and are kept intact.
