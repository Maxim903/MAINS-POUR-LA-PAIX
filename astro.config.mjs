import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Remplacez par votre vrai domaine une fois acheté
export default defineConfig({
  site: 'https://mainspourlapaix.org',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
