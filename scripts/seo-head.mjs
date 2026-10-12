import { pageSeo, SITE_ORIGIN } from '../src/seo.js';

const escape = text => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function renderPageHead(html, path, origin = SITE_ORIGIN) {
  const seo = pageSeo(path, origin);
  const headEnd = html.indexOf('</head>');
  const head = html.slice(0, headEnd)
    .replace(/<title>.*?<\/title>/gs, '')
    .replace(/<meta\b[^>]*(?:name="(?:description|robots)"|property="og:(?:title|description|url|image|type)")[^>]*>/g, '')
    .replace(/<link\b[^>]*rel="canonical"[^>]*>/g, '')
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>.*?<\/script>/gs, '');
  const tags = [
    `<title>${escape(seo.title)}</title>`,
    `<meta name="description" content="${escape(seo.description)}" />`,
    `<link rel="canonical" href="${escape(seo.canonical)}" />`,
    ...Object.entries({ title: seo.title, description: seo.description, url: seo.canonical, image: seo.image, type: seo.type }).map(([key, value]) => `<meta property="og:${key}" content="${escape(value)}" />`),
    ...(seo.noindex ? ['<meta name="robots" content="noindex,follow" />'] : []),
    `<script type="application/ld+json">${JSON.stringify(seo.schema).replace(/</g, '\\u003c')}</script>`,
  ];
  return `${head}${tags.join('\n')}${html.slice(headEnd)}`;
}
