import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { guides, categories, pagePaths, pageMeta, sources, searchGuides } from '../src/content.js';

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
    for (const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
      if (match[1].startsWith('/assets/')) continue;
      assert.ok(pagePaths.includes(match[1]) || existsSync(`dist/client${match[1]}`), `${path}: broken link ${match[1]}`);
    }
  }
});
test('SEO: titles stay within 60 characters and descriptions within 160', () => {
  for (const path of pagePaths) {
    const meta = pageMeta(path);
    assert.ok(meta.title.length > 0 && meta.title.length <= 60, `${path}: title is ${meta.title.length} chars ("${meta.title}")`);
    assert.ok(meta.description.length > 0 && meta.description.length <= 160, `${path}: description is ${meta.description.length} chars`);
  }
});
test('Generated llms.txt matches served output and includes every guide', () => {
  const llms = readFileSync('public/llms.txt', 'utf8');
  assert.equal(llms, readFileSync('dist/client/llms.txt', 'utf8'));
  for (const guide of guides) assert.ok(llms.includes(`/${guide.slug}/`));
  assert.ok(llms.includes('not independently playtested'));
});
