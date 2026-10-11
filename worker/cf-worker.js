// Cloudflare Workers entry. Static assets come from dist/client (wrangler.json);
// unknown routes serve dist/client/404.html with a 404 status via the
// not_found_handling setting, so no SPA fallback here — every page is prerendered.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
