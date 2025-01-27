import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    // mdx(),
    sitemap(),
    sentry(),
    spotlightjs(),
  ],
});