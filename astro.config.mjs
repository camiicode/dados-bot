// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    buildEnd() {
      // Copia todo lo de _astro/ a assets/
      cpSync('./dist/_astro', './dist/assets/', { recursive: true });
    }
  },
  site: 'https://camiicode.github.io',
  base: '/dados-bot/',
  build: {
    format: 'directory'
  }
});