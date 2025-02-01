// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        '@components/ImageSectino.astro',
      ],
    }),
    mdx(),
    sitemap()
  ],
  devToolbar: {
    enabled: false
  }
});
