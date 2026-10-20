// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AutoImport from 'astro-auto-import';
import cloudflare from '@astrojs/cloudflare';
import path from 'path';

const pjRoot = path.resolve(import.meta.dirname);

// https://astro.build/config
export default defineConfig({
  site: 'https://sysken.net',
  output: 'static',
  integrations: [
    AutoImport({
      imports: ['@components/ImageSectino.astro'],
    }),
    mdx(),
    sitemap(),
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '${path.join(pjRoot, './src/styles/variables.scss')}' as *;`,
        },
      },
    },
    resolve: {
      tsconfigPaths: true,
    },
  },
  devToolbar: {
    enabled: false,
  },

  adapter: cloudflare(),
});
