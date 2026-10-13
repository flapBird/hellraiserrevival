import { useEffect, useLayoutEffect, useState } from 'react';
import { pagePaths } from './content.js';
import { normalizePagePath } from './seo.js';

const navigationEvent = 'guide:navigate';
const currentHref = () => location.pathname + location.search + location.hash;

export function navigateTo(href) {
  history.replaceState({ ...history.state, guideScroll: [scrollX, scrollY] }, '');
  history.pushState({ guideScroll: [0, 0] }, '', href);
  window.dispatchEvent(new Event(navigationEvent));
}

export function canNavigateLink(event, link, currentUrl) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return false;
  const url = new URL(link.href, currentUrl);
  const current = new URL(currentUrl);
  if (url.origin !== current.origin || !pagePaths.includes(normalizePagePath(url.pathname))) return false;
  // Keep native in-page anchors and their keyboard behavior.
  return !(url.pathname === current.pathname && url.search === current.search && url.hash);
}

export function usePageNavigation(initialPath) {
  const [route, setRoute] = useState(() => ({ href: initialPath || (typeof window === 'undefined' ? '/' : currentHref()), kind: 'initial', key: 0 }));
  useEffect(() => {
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    let scrollFrame;
    const update = kind => {
      cancelAnimationFrame(scrollFrame);
      const href = currentHref();
      setRoute(previous => ({ href, kind, key: previous.key + (previous.href.split('#')[0] === href.split('#')[0] ? 0 : 1), scroll: history.state?.guideScroll || [0, 0] }));
    };
    const onNavigate = () => update('push');
    const onPop = () => update('pop');
    const onClick = event => {
      const link = event.target.closest?.('a[href]');
      if (!canNavigateLink(event, link, location.href)) return;
      event.preventDefault();
      const url = new URL(link.href);
      if (url.href === location.href) return;
      navigateTo(url.pathname + url.search + url.hash);
    };
    const onScroll = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => history.replaceState({ ...history.state, guideScroll: [scrollX, scrollY] }, ''));
    };
    document.addEventListener('click', onClick);
    window.addEventListener(navigationEvent, onNavigate);
    window.addEventListener('popstate', onPop);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(scrollFrame);
      history.scrollRestoration = previousRestoration;
      document.removeEventListener('click', onClick);
      window.removeEventListener(navigationEvent, onNavigate);
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  useLayoutEffect(() => {
    if (route.kind === 'initial') return;
    const hash = new URL(route.href, location.origin).hash;
    let target;
    try { target = hash && document.getElementById(decodeURIComponent(hash.slice(1))); } catch { /* Invalid fragments simply use the top of the page. */ }
    if (route.kind === 'push' && target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ left: route.scroll[0], top: route.scroll[1], behavior: 'instant' });
  }, [route]);
  return route;
}
