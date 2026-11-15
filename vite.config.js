import { defineConfig } from 'vite';

// App estática (HTML + JS en línea; D3 desde CDN con versión fija): Vite solo compila Tailwind y
// copia el logo. Base relativa: funciona en GitHub Pages (/InventarioCMDB/) y en cualquier subcarpeta.
export default defineConfig({
  base: './',
});
