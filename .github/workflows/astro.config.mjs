import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://<your-username>.github.io',
  base: '/<repository-name>', // Omit or set to '/' if using a custom domain or user page (<username>.github.io)
});
