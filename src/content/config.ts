import { z, defineCollection } from "astro:content";

const blogposts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    dessription: z.string(),
    publishDate: z.string(),
    published: z.boolean(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogposts,
};
