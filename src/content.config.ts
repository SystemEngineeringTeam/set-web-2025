import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { zNoticesSchema, zPagesSchema, zPostsSchema, zProductsSchema } from './schema/contents';

export const collections = {
  pages: defineCollection({
    loader: glob({ base: './src/contents/pages', pattern: '**/*.{md,mdx}' }),
    schema: zPagesSchema,
  }),
  posts: defineCollection({
    loader: glob({ base: './src/contents/posts', pattern: '**/*.{md,mdx}' }),
    schema: zPostsSchema,
  }),
  products: defineCollection({
    loader: glob({ base: './src/contents/products', pattern: '**/*.{md,mdx}' }),
    schema: zProductsSchema,
  }),
  notices: defineCollection({
    loader: glob({ base: './src/contents/notices', pattern: '**/*.{md,mdx}' }),
    schema: zNoticesSchema,
  }),
};
