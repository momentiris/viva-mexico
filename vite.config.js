import { defineConfig } from 'vite';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export const aliases = {
  '@': resolve(__dirname, './src'),
};

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
});
