import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    type: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    featureImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    featureImage: z.string().optional(),
  }),
});

export const collections = { blog, pages };
