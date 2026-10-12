import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { guides, categories, navigationLinks, pagePaths, pageMeta, popularGuides, reviewedOn, sources, searchGuides } from '../src/content.js';

test('Every guide has a unique route, supported category, usable asset and source', () => {
  assert.equal(new Set(guides.map(g => g.slug)).size, guides.length);
  for (const guide of guides) {
    assert.ok(categories.some(c => c.id === guide.category));
    assert.ok(existsSync(`public/assets/${guide.image}.jpg`));
    assert.ok(guide.sources.length);
    guide.sources.forEach(key => assert.ok(sources[key]?.url.startsWith('https://')));
    guide.related.forEach(slug => assert.ok(guides.some(g => g.slug === slug)));
    assert.equal(new Set(guide.sections.map(s => s.id)).size, guide.sections.length);
  }
});
test('Search matches multiple words, categories, leading-zero codes and empty results', () => {
  assert.ok(searchGuides('BATHROOM cabinet').some(g => g.slug === 'locker-codes'));
  assert.ok(searchGuides('0199').some(g => g.slug === 'locker-codes'));
  assert.equal(searchGuides('', 'trophies').length, 1);
  assert.equal(searchGuides('no-such-item-xyz').length, 0);
});
test('Production pages contain readable body text, metadata and valid internal paths', () => {
  for (const path of pagePaths) {
    const html = readFileSync(`dist/client${path}index.html`, 'utf8');
    assert.ok(html.includes('<h1>'));
    assert.ok(html.includes('name="description"'));
    assert.ok(html.includes('application/ld+json'));
    assert.ok(!html.includes('<title>Prototype</title>'));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: exactly one h1`);
    let previousHeading = 0;
    for (const heading of html.matchAll(/<h([1-6])[ >]/g)) {
      const level = Number(heading[1]);
      assert.ok(level <= previousHeading + 1, `${path}: heading skips from h${previousHeading} to h${level}`);
      previousHeading = level;
    }
    for (const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
      if (match[1].startsWith('/assets/')) continue;
      assert.ok(pagePaths.includes(match[1]) || existsSync(`dist/client${match[1]}`), `${path}: broken link ${match[1]}`);
    }
  }
});
test('Popular guides have direct homepage links, searchable topics and accurate review dates', () => {
  const home = readFileSync('dist/client/index.html', 'utf8');
  for (const slug of popularGuides) {
    const guide = guides.find(g => g.slug === slug);
    assert.ok(guide, `missing popular guide ${slug}`);
    assert.ok(home.includes(`href="/${slug}/"`));
    const html = readFileSync(`dist/client/${slug}/index.html`, 'utf8');
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema.dateModified, guide.reviewedOn || reviewedOn);
    assert.ok(readFileSync('dist/client/sitemap.xml', 'utf8').includes(`https://hellraiserrevival.help/${slug}/`));
  }
  assert.ok(searchGuides('Sister mercy').some(g => g.slug === 'sister-of-mercy'));
  assert.ok(searchGuides('Zora').some(g => g.slug === 'zora'));
  assert.ok(searchGuides('how long').some(g => g.slug === 'how-long-to-beat'));
  assert.ok(searchGuides('1512').some(g => g.slug === 'locker-codes'));
});
test('Every page exposes key guides in the header and marks the current destination', () => {
  const required = ['/locker-codes/', '/sister-of-mercy/', '/zora/', '/trophies/', '/crashing-fix/', '/how-long-to-beat/'];
  for (const path of pagePaths) {
    const html = readFileSync(`dist/client${path}index.html`, 'utf8');
    const desktop = html.match(/<nav class="desktop-nav"[^>]*>(.*?)<\/nav>/s)[1];
    const quick = html.match(/<nav class="priority-nav"[^>]*>(.*?)<\/nav>/s)[1];
    for (const href of required) assert.ok(desktop.includes(`href="${href}"`), `${path}: header missing ${href}`);
    for (const href of ['/locker-codes/', '/sister-of-mercy/', '/zora/', '/guides/']) {
      assert.ok(quick.includes(`href="${href}"`), `${path}: mobile shortcut missing ${href}`);
    }
    if (navigationLinks.some(link => link.href === path)) {
      assert.ok(desktop.includes(`href="${path}"`) && new RegExp(`<a[^>]*href="${path}"[^>]*aria-current="page"`).test(desktop));
    }
  }
  assert.ok(navigationLinks.every(link => pagePaths.includes(link.href)), 'navigation must resolve to existing pages');
});
test('Lock jump links resolve, answers stay collapsed and every lock has its own attribution', () => {
  const html = readFileSync('dist/client/locker-codes/index.html', 'utf8');
  const items = guides.find(g => g.slug === 'locker-codes').sections.find(s => s.kind === 'codes').items;
  assert.equal(new Set(items.map(item => item.id)).size, items.length);
  for (const item of items) {
    assert.ok(/^\d{4}$/.test(item.code), `${item.name}: preserve all four digits`);
    assert.ok(item.sources.length && item.sources.every(key => sources[key]), `${item.name}: source attribution`);
    assert.ok(html.includes(`id="lock-${item.id}"`));
    assert.ok(html.includes(`href="#lock-${item.id}"`));
    assert.ok(html.includes(`<code>${item.code}</code>`));
  }
  assert.ok(!/<details[^>]*\bopen\b/.test(html), 'codes and solutions should require a reveal');
  assert.ok(html.includes('Search lock locations'));
  assert.ok(html.includes('Filter locks by area'));
});
test('SEO: titles stay within 60 characters and descriptions within 160', () => {
  for (const path of pagePaths) {
    const meta = pageMeta(path);
    assert.ok(meta.title.length > 0 && meta.title.length <= 60, `${path}: title is ${meta.title.length} chars ("${meta.title}")`);
    assert.ok(meta.description.length > 0 && meta.description.length <= 160, `${path}: description is ${meta.description.length} chars`);
  }
});
test('Homepage wiki title stays consistent across template and generated metadata', () => {
  const title = 'Hellraiser Revival Wiki';
  const home = readFileSync('dist/client/index.html', 'utf8');
  assert.equal(pageMeta('/').title, title);
  assert.ok(readFileSync('index.html', 'utf8').includes(`<title>${title}</title>`));
  assert.ok(home.includes(`<title>${title}</title>`));
  assert.ok(home.includes(`<meta property="og:title" content="${title}"`));
  const schema = JSON.parse(home.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema.headline, title);
});
test('Search entries use the guide-library page and work as regular links and forms', () => {
  for (const path of pagePaths) {
    const html = readFileSync(`dist/client${path}index.html`, 'utf8');
    const href = path === '/guides/' ? '#guide-search' : '/guides/?search=1';
    const searchLink = html.match(/<a\b[^>]*aria-label="Search guides"[^>]*>/)[0];
    assert.ok(searchLink.includes(`href="${href}"`), `${path}: search should open the library`);
    assert.ok(!html.includes('<dialog'), `${path}: no modal search`);
  }
  const library = readFileSync('dist/client/guides/index.html', 'utf8');
  assert.ok(library.includes('for="guide-search"'));
  assert.ok(/<input[^>]*id="guide-search"[^>]*type="search"[^>]*name="q"/.test(library));
  const heroSearch = readFileSync('dist/client/index.html', 'utf8').match(/<form\b[^>]*class="hero-search"[^>]*>/)[0];
  assert.ok(heroSearch.includes('action="/guides/"'));
  assert.ok(heroSearch.includes('role="search"'));
});
test('Generated llms.txt matches served output and includes every guide', () => {
  const llms = readFileSync('public/llms.txt', 'utf8');
  assert.equal(llms, readFileSync('dist/client/llms.txt', 'utf8'));
  for (const guide of guides) assert.ok(llms.includes(`/${guide.slug}/`));
  assert.ok(llms.includes('not independently playtested'));
});
