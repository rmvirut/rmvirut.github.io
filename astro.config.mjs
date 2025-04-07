import { defineConfig } from "astro/config";

import react from "@astrojs/react";
// import vue from "@astrojs/vue"

// import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // vue(),
    react(),
    // mdx(),
    sitemap(),
    sentry(),
    spotlightjs(),
  ],

  adapter: cloudflare(),
});