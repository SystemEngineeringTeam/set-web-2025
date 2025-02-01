import type { CollectionEntry } from 'astro:content';

export function toPath(page: CollectionEntry<'pages'>, startWithSlash = false): string {
  const title = page.data.title.toLowerCase();
  const customPath = page.data.tags.path;
  const path = customPath ?? title;

  if (startWithSlash) return `/${path}`;
  return path;
}
