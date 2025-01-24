import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';
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
  ],
});
