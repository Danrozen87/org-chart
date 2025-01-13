import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { sveltePreprocess } from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'workspaces/org-chart/src'),
      '$lib': path.resolve(__dirname, 'workspaces/org-chart/src/lib')
    }
  },
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    port: 5173,
    fs: {
      allow: ['..']
    }
  }
});