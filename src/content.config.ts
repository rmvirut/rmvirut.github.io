// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

const md_and_mdx_patterns = ["**/*.mdx", "**/*.mdx"];
// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/blog" }),
  schema: z.object({
    title: z.string(),
  })
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/portfolio" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image(),
  })
});


const work_experience = defineCollection(
  {
    loader: glob({ pattern: "**/*.md", base: "src/data/resume/experience" }),
    schema: z.object({
      title: z.string(),
      employer: z.string(),
      start_date: z.string(),
      location: z.string()
    })
  }
)

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, portfolio, work_experience }
