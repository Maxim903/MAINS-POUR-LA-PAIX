import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const axes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/axes' }),
  schema: z.object({ title: z.string(), order: z.number(), summary: z.string() }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['rapport', 'fiche', 'communique']),
    country: z.string().optional(),
    summary: z.string(),
    pdf: z.string().optional(),
    sources: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { axes, publications, actualites };
