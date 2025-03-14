// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomasmorono-astro-project.netlify.app/',
  integrations: [preact()],
});