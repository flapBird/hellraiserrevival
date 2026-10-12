import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'vite';
import { pagePaths, pageMeta } from '../src/content.js';
import { pageSeo, SITE_ORIGIN } from '../src/seo.js';
import { renderPageHead } from '../scripts/seo-head.mjs';

const decode = text => text.replace(/&(?:amp|lt|gt|quot|#39);/g, entity => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" }[entity]));
function assertHead(html, path) {
  const head = html.split('</head>')[0];
  const seo = pageSeo(path);
  const canonical = [...head.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  assert.equal(canonical.length, 1, `${path}: one canonical in source HTML`);
  assert.equal(canonical[0][1], seo.canonical);
  assert.ok(head.includes(`<meta property="og:url" content="${seo.canonical}"`));
  assert.equal(decode(head.match(/<title>(.*?)<\/title>/s)[1]), seo.title);
  assert.equal(decode(head.match(/<meta name="description" content="([^"]*)"/)[1]), seo.description);
  assert.equal(decode(head.match(/<meta property="og:description" content="([^"]*)"/)[1]), seo.description);
  const schema = JSON.parse(head.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema.url, seo.canonical);
  assert.equal(schema.headline, seo.title);
  assert.equal(schema.description, seo.description);
  assert.equal(head.includes('name="robots" content="noindex,follow"'), seo.noindex);
}

test('Every production page has one absolute canonical and consistent SEO metadata before JavaScript', () => {
  const descriptions = new Set();
  for (const path of [...pagePaths, '/404/']) {
    assertHead(readFileSync(`dist/client${path}index.html`, 'utf8'), path);
    const meta = pageMeta(path);
    assert.ok(!descriptions.has(meta.description), `${path}: unique description`);
    descriptions.add(meta.description);
  }
  assertHead(readFileSync('dist/client/404.html', 'utf8'), '/404/');
  const sitemap = readFileSync('dist/client/sitemap.xml', 'utf8');
  for (const path of pagePaths) assert.ok(sitemap.includes(`<loc>${pageSeo(path).canonical}</loc>`));
  assert.ok(!sitemap.includes(`${SITE_ORIGIN}/404/`));
});

test('Canonical URLs omit search, filters and fragments, normalize trailing slashes and support the configured origin', () => {
  for (const path of ['/guides', '/guides/?q=cabinet&category=locker-codes&saved=1#guide-search', '/guides/index.html?q=cabinet']) {
    assert.equal(pageSeo(path).canonical, `${SITE_ORIGIN}/guides/`);
  }
  assert.equal(pageSeo('/index.html').canonical, `${SITE_ORIGIN}/`);
  const alternate = pageSeo('/locker-codes/', 'https://other.example/');
  assert.equal(alternate.canonical, 'https://other.example/locker-codes/');
  assert.equal(alternate.schema.url, alternate.canonical);
  assert.equal(alternate.image, 'https://other.example/assets/hero.jpg');
  const unknown = pageSeo('/locker-codes/missing/');
  assert.equal(unknown.noindex, true);
  assert.equal(unknown.title, pageMeta('/404/').title);
});

test('SEO head rendering replaces stale tags without duplicating metadata or changing analytics', () => {
  const template = readFileSync('index.html', 'utf8');
  const html = renderPageHead(renderPageHead(template, '/'), '/privacy/');
  assertHead(html, '/privacy/');
  assert.equal((html.match(/<title>/g) || []).length, 1);
  assert.equal((html.match(/<meta name="description"/g) || []).length, 1);
  assert.equal((html.match(/<script type="application\/ld\+json"/g) || []).length, 1);
  assert.ok(html.includes("host === '127.0.0.1'"));
  assert.ok(html.includes('G-4JJJXB57Y7') && html.includes('yw1zcvsluk'));
  const alternate = renderPageHead(template, '/zora/', 'https://other.example');
  assert.ok(alternate.includes('rel="canonical" href="https://other.example/zora/"'));
});

test('Vite renders route-specific canonicals, titles and descriptions in the initial development HTML', async () => {
  const server = await createServer({ logLevel: 'silent', server: { middlewareMode: true, hmr: false, warmup: { clientFiles: [] } } });
  try {
    const template = readFileSync('index.html', 'utf8');
    for (const path of [...pagePaths, '/404/', '/guides/?q=cabinet&saved=1', '/locker-codes/missing/']) {
      assertHead(await server.transformIndexHtml(path, template, path), path);
    }
  } finally {
    await server.close();
  }
});
