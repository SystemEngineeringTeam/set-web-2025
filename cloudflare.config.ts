import { defineConfig } from 'cf/config';

export default defineConfig({
  worker: {
    name: 'set-web-2025',
    compatibilityDate: '2026-10-06',
    observability: {
      enabled: true,
    },
    domains: [
      {
        hostname: 'sysken.net',
        production: true,
        previews: false,
      },
      {
        hostname: 'p.sysken.net',
        production: false,
        previews: true,
      },
    ],
    previewUrls: false,
    env: {
      ASSETS: {
        type: 'assets',
      },
    },
  },
});
