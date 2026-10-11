import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

test('Cloudflare deployment is wired to the built client', () => {
  const config = JSON.parse(readFileSync('wrangler.json', 'utf8'));
  assert.equal(config.main, 'worker/cf-worker.js');
  assert.equal(config.assets.directory, 'dist/client');
  assert.equal(config.assets.not_found_handling, '404-page');
  assert.ok(existsSync('worker/cf-worker.js'));
  const worker = readFileSync('worker/cf-worker.js', 'utf8');
  assert.ok(worker.includes('env.ASSETS.fetch'));
});

test('Built client carries Cloudflare headers, 404 page and crawler files', () => {
  const headers = readFileSync('dist/client/_headers', 'utf8');
  assert.ok(headers.includes('/assets/*'));
  assert.ok(headers.includes('immutable'));
  assert.ok(headers.includes('X-Content-Type-Options: nosniff'));
  assert.ok(readFileSync('dist/client/404.html', 'utf8').includes('This path leads nowhere.'));
  assert.ok(readFileSync('dist/client/robots.txt', 'utf8').includes('Sitemap: https://hellraiserrevival.help/sitemap.xml'));
  assert.ok(existsSync('dist/client/sitemap.xml'));
});
