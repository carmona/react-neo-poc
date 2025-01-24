import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint({ cache: false }),
    react(),
    viteStaticCopy({
      targets: [{ src: 'src/assets/*.csv', dest: 'assets' }],
    }),
    // viteSingleFile(),
    // cssInjectedByJsPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'mgm-contacts.js',
        assetFileNames: 'mgm-contacts.css',
        chunkFileNames: 'mgm-chunk.js',
        manualChunks: undefined,
      },
    },
  },
});
