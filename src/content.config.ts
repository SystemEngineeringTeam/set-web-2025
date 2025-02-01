import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { PAGE_STYLE } from './consts/page-style';

function esaSchema<T extends Record<string, z.Schema>>(tagsSchema: T) {
  return z.object({
    title: z.string(),
    category: z.string().nullable(),
    tags: z.preprocess((tags) => {
      if (tags == null) return {};
      if (typeof tags !== 'string') throw new Error('tags must be a string');

      const entries = tags.split(',').map((pair) => {
        const pairs = pair.split(':');
        const key = pairs.at(0)?.trim();
        const value = pairs.at(1)?.trim();
        if (!key || !value) return null;
        return [key, value];
      });

      const noneNullEntries = entries.filter((entry): entry is [string, string] => entry !== null);
      return z.object<T>(tagsSchema).parse(Object.fromEntries(noneNullEntries));
    }, z.object(tagsSchema)),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    published: z.boolean(),
    number: z.number(),
  });
}

export const collections = {
  pages: defineCollection({
    loader: glob({ base: './src/contents/pages', pattern: '**/*.{md,mdx}' }),
    schema: esaSchema({
      sort: z.string().optional(),
      path: z.preprocess((path) => path && String(path).replace('¥', ''), z.string().optional()),
      title: z.coerce.boolean().default(false),
      style: z.enum(PAGE_STYLE).default('default'),
      widthNarrow: z.coerce.boolean().default(false),
      other: z.coerce.boolean().default(false),
    }),
  }),
  posts: defineCollection({
    loader: glob({ base: './src/contents/posts', pattern: '**/*.{md,mdx}' }),
    schema: esaSchema({}), // TODO
  }),
  products: defineCollection({
    loader: glob({ base: './src/contents/products', pattern: '**/*.{md,mdx}' }),
    schema: esaSchema({}), // TODO
  }),
  notice: defineCollection({
    loader: glob({ base: './src/contents/notice', pattern: '**/*.{md,mdx}' }),
    schema: esaSchema({}), // TODO
  }),
};
