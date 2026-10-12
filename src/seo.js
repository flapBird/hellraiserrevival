import { getGuide, pageMeta, pagePaths, reviewedOn, sources } from './content.js';

export const SITE_ORIGIN = 'https://hellraiserrevival.help';

export function normalizePagePath(path) {
  const pathname = path.split(/[?#]/)[0].replace(/\/index\.html$/, '/');
  return pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
}

export function pageSeo(path, origin = SITE_ORIGIN) {
  const normalized = normalizePagePath(path);
  const found = pagePaths.includes(normalized);
  const canonical = `${new URL(origin).origin}${found ? normalized : '/404/'}`;
  const meta = pageMeta(normalized);
  const guide = found && getGuide(normalized.split('/').filter(Boolean)[0]);
  return {
    ...meta,
    canonical,
    image: `${new URL(origin).origin}/assets/hero.jpg`,
    type: guide ? 'article' : 'website',
    noindex: !found,
    schema: {
      '@context': 'https://schema.org',
      '@type': guide ? 'Article' : 'WebPage',
      headline: meta.title,
      description: meta.description,
      inLanguage: 'en',
      url: canonical,
      ...(guide ? {
        dateModified: guide.reviewedOn || reviewedOn,
        author: { '@type': 'Organization', name: 'Hellraiser Revival Guides' },
        citation: guide.sources.map(key => sources[key].url),
      } : {}),
    },
  };
}

export function syncPageSeo(path) {
  // Preserve the build's SITE_URL override; local pages use the production origin too.
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  const origin = existingCanonical?.href ? new URL(existingCanonical.href).origin : SITE_ORIGIN;
  const seo = pageSeo(path, origin);
  document.title = seo.title;
  const setTag = (selector, name, attributes) => {
    let tag = document.head.querySelector(selector);
    if (!tag) { tag = document.createElement(name); document.head.appendChild(tag); }
    for (const [key, value] of Object.entries(attributes)) {
      if (tag.getAttribute(key) !== value) tag.setAttribute(key, value);
    }
    return tag;
  };
  setTag('meta[name="description"]', 'meta', { name: 'description', content: seo.description });
  setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: seo.canonical });
  for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, url: seo.canonical, image: seo.image, type: seo.type })) {
    setTag(`meta[property="og:${key}"]`, 'meta', { property: `og:${key}`, content: value });
  }
  if (seo.noindex) setTag('meta[name="robots"]', 'meta', { name: 'robots', content: 'noindex,follow' });
  else document.head.querySelector('meta[name="robots"]')?.remove();
  const schema = setTag('script[type="application/ld+json"]', 'script', { type: 'application/ld+json' });
  const json = JSON.stringify(seo.schema).replace(/</g, '\\u003c');
  if (schema.textContent !== json) schema.textContent = json;
}
