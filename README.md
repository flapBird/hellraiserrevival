# Hellraiser Revival Guides

**Live site: [https://hellraiserrevival.help](https://hellraiserrevival.help)**

An independent, English-language fan guide for Clive Barker's *Hellraiser: Revival*. Source-linked walkthrough notes, puzzle solutions, locker codes, collectibles and PC troubleshooting — with optional spoiler reveals, a saved firearm checklist and local bookmarks. Not affiliated with or endorsed by Saber Interactive, Boss Team Games or Clive Barker; artwork is AI-generated illustration, not gameplay footage.

## Pages

| Path | Content |
| --- | --- |
| `/` | Hero search, six guide categories, game brief for new players |
| `/guides/` | Searchable guide library with category filters and saved guides |
| `/beginners-guide/` | What the game is & how to play |
| `/walkthrough/` | Opening objectives and route notes |
| `/puzzles/`, `/genesis-configuration/` | Puzzle mechanisms with hint-first reveals |
| `/locker-codes/` | Five location-specific combinations with copy buttons |
| `/collectibles/` | Collectible groups and a saved firearm checklist |
| `/trophies/` | Completion roadmap and reported missables |
| `/crashing-fix/` | PC requirements and Steam file verification |
| `/about/`, `/privacy/` | Editorial policy; local storage & analytics disclosure |
| `/404/` | Prerendered not-found page |

## Tech

- React 19 + Vite 6, plain CSS (`src/styles.css`), Phosphor icons
- Fully prerendered static output: `npm run build` renders every route (plus `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt`) with `react-dom/server` in `scripts/prerender.mjs`
- All guide content lives in `src/content.js` — edit there; titles/descriptions and the sitemap regenerate on build
- Client-side extras (search, filters, bookmarks, code copy) hydrate on top of the static HTML

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

- `wrangler.json` serves `dist/client`, normalizes trailing slashes and returns the prerendered `404.html` with a real 404 status for unknown routes.
- `public/_headers` adds caching (immutable hashed assets, 4h for icons/robots/sitemap) and security headers.
- Canonical URLs, `og:` metadata and the sitemap default to `https://hellraiserrevival.help` (`SITE_URL` env overrides).
- Alternative: Cloudflare Pages with build command `npm run build` and output directory `dist/client`.

## Conventions

- SEO is test-enforced: page titles ≤ 60 characters, meta descriptions ≤ 160, exactly one `<h1>` per page, no skipped heading levels.
- Google Search favicon rules: square icons, 48px multiples (`favicon.ico` 16/32/48, PNG 192).
- Analytics (GA + Microsoft Clarity) load from one guarded inline script in `index.html` and never fire on local hosts; disclosed on `/privacy/`.
- `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs` and `tests/sites-worker.test.mjs` support an alternative OpenAI Sites handoff and are kept intact.
