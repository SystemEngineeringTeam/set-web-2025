// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
  site: 'https://sysken.net',
  integrations: [
    AutoImport({
      imports: [
        '@components/ImageSectino.astro',
      ],
    }),
    mdx(),
    sitemap()
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/styles/variables.scss' as *;`
        }
      }
    }
  },
  devToolbar: {
    enabled: false
  }
});
