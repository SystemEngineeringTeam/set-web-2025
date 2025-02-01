import type { CollectionEntry } from 'astro:content';

export function toPath(page: CollectionEntry<'pages'>) {
  const title = page.data.title.toLowerCase();
  const customPath = page.data.tags.path;
  return customPath ?? title;
}
