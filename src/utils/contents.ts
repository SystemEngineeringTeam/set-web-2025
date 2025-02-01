import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import { toPath } from './path';
import { DEFAULT_POST_THUMBNAIL } from './images';
import { pipe } from 'remeda';

const STATIC_ROUTES = ['', 'posts', 'post', 'products'];
export const IMAGE_REGEX = /^[\s\n]*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;

export async function getPages(onlyDynamicRoutes = false) {
  const pages = await getCollection('pages');
  const sortedPages = pages.sort((a, b) => a.data.tags.sort - b.data.tags.sort);
  const filteredPages = sortedPages.filter((page) => page.data.title !== 'README');

  if (!onlyDynamicRoutes) return filteredPages;

  return filteredPages.filter((page) => !STATIC_ROUTES.includes(toPath(page)));
}

export async function getFormatedCollection<T extends CollectionKey>(key: T, limit: number | undefined = undefined) {
  const collection = await getCollection<T>(key);
  const sorted = collection.sort((a, b) => (getCreatedAt(a) > getCreatedAt(b) ? -1 : 1));
  const filtered = sorted.filter((c) => c.data.title !== 'README');
  return filtered.slice(0, limit);
}

export function toText(md: string | undefined, limit = 150) {
  const text = md
    ?.replace(/#+ .*\n/g, '')
    .replace(/[ |:\\*-]/g, '')
    .replace(/<.+>/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\\/g, '')
    .replace(/\[.*\]\(.*\)/g, '')
    .slice(0, limit);
  return text ?? '';
}

export function pickPostThumbnail(md: string | undefined): string {
  const regex = IMAGE_REGEX;
  const matches = md?.match(regex);
  return matches?.at(2) ?? matches?.at(3) ?? DEFAULT_POST_THUMBNAIL.src;
}

export function getCreatedAt(post: CollectionEntry<CollectionKey>, format = false) {
  const date = pipe(post, (post) => {
    if ('at' in post.data.tags) return post.data.tags.at ?? post.data.created_at;
    return post.data.created_at;
  });
  if (!format) return date;

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}
