import test from 'node:test';
import assert from 'node:assert/strict';
import { canNavigateLink } from '../src/navigation.js';

const current = 'https://hellraiserrevival.help/guides/?q=cabinet';
const click = { button: 0 };
const link = (href, attributes = {}) => ({ href, target: attributes.target, hasAttribute: name => name in attributes });

test('Known internal pages and query changes can navigate without reloading', () => {
  for (const href of ['/locker-codes/', '/guides/?saved=1', '/sister-of-mercy/#red-arena', '/']) {
    assert.equal(canNavigateLink(click, link(href), current), true);
  }
});

test('Modified clicks, downloads, new tabs, external links and unknown routes keep native behavior', () => {
  for (const event of [{ button: 1 }, { ...click, metaKey: true }, { ...click, ctrlKey: true }, { ...click, shiftKey: true }, { ...click, altKey: true }, { ...click, defaultPrevented: true }]) {
    assert.equal(canNavigateLink(event, link('/locker-codes/'), current), false);
  }
  for (const destination of [link('/locker-codes/', { download: '' }), link('/locker-codes/', { target: '_blank' }), link('https://saber.games/'), link('/missing/'), link('mailto:hello@example.com'), null]) {
    assert.equal(canNavigateLink(click, destination, current), false);
  }
});

test('Same-page anchors remain native while cross-page anchors can navigate', () => {
  assert.equal(canNavigateLink(click, link('#guide-search'), current), false);
  assert.equal(canNavigateLink(click, link('/sister-of-mercy/#red-arena'), current), true);
});
