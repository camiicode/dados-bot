// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://camiicode.github.io',
  base: '/dados-bot',
  build: {
    format: 'directory' // Esto ayuda con el manejo de rutas en algunos casos
  }
});