import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { renderPageHead } from './scripts/seo-head.mjs';
import { SITE_ORIGIN } from './src/seo.js';

export default defineConfig({
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react(), {
    name: 'development-page-seo',
    apply: 'serve',
    transformIndexHtml(html, context) {
      return renderPageHead(html, context.originalUrl || context.path, process.env.SITE_URL || SITE_ORIGIN);
    },
  }],
});
