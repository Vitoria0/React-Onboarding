import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import GlobImport from 'rollup-plugin-glob-import';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), GlobImport({})],
  resolve: {
    alias: {
      '@src': '/src',
    },
  },
});
