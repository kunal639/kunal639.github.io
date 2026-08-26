import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kunal639.github.io',
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.dev'],
    },
  },
});