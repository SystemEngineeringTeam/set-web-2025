import { getCollection, type CollectionEntry } from 'astro:content';
import { toPath } from './path';
import { DEFAULT_POST_THUMBNAIL } from './IMAGES';

const STATIC_ROUTES = ['', 'posts', 'post', 'products'];
export const IMAGE_REGEX = /^[\s\n]*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;

export async function getPages(onlyStaticRoutes = true) {
  const pages = await getCollection('pages');
  const sortedPages = pages.sort((a, b) => a.data.tags.sort - b.data.tags.sort);
  const filteredPages = sortedPages.filter((page) => page.data.title !== 'README');

  if (!onlyStaticRoutes) return filteredPages;

  return filteredPages.filter((page) => STATIC_ROUTES.includes(toPath(page)));
}

export async function getPosts(limit: number | null = null, offset: number = 0) {
  const posts = await getCollection('posts');
  const sortedPosts = posts.sort((a, b) => (getCreatedAt(a) > getCreatedAt(b) ? -1 : 1));
  const filteredPages = sortedPosts.filter((post) => post.data.title !== 'README');

  return filteredPages.slice(offset, limit ? offset + limit : undefined);
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

export function getCreatedAt(post: CollectionEntry<'posts'>, format = false) {
  const date = post.data.tags.at ?? post.data.created_at;
  if (!format) return date;

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}
