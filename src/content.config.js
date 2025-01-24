// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

const md_and_mdx_patterns = ["**/*.mdx", "**/*.mdx"]
// 3. Define your collection(s)
const blog = defineCollection({ pattern: md_and_mdx_patterns, base: "./data/blog" });
const portfolio = defineCollection({ pattern: md_and_mdx_patterns, base: "./data/portfolio" });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, portfolio };