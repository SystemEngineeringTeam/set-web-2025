import { getCollection } from 'astro:content';
import { toPath } from './path';

const STATIC_ROUTES = ['', 'posts', 'post', 'products'];

export async function getPages(onlyStaticRoutes = true) {
  const pages = await getCollection('pages');
  const sortedPages = pages.sort((a, b) => a.data.tags.sort - b.data.tags.sort);
  const filteredPages = sortedPages.filter((page) => page.data.title !== 'README');

  if (!onlyStaticRoutes) return filteredPages;

  return filteredPages.filter((page) => STATIC_ROUTES.includes(toPath(page)));
}
