import { PAGE_STYLE } from '@/consts/page-style';
import { getCollection, z } from 'astro:content';

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

export const zPagesSchema = esaSchema({
  sort: z.preprocess((sort) => {
    if (sort === undefined) return Infinity;
    if (Number.isNaN(Number(sort))) return Infinity;
    return Number(sort);
  }, z.number()),
  path: z.preprocess((path) => path && String(path).replace('¥', ''), z.string().optional()),
  title: z.coerce.boolean().default(false),
  style: z.enum(PAGE_STYLE).default('default'),
  widthNarrow: z.coerce.boolean().default(false),
  other: z.coerce.boolean().default(false),
});
export type zPages = z.infer<typeof zPagesSchema>;

export const zPostsSchema = esaSchema({
  at: z.coerce.date().optional(),
});

export const zProductsSchema = esaSchema({}); // TODO

export const zNoticesSchema = esaSchema({}); // TODO
