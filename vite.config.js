import { defineConfig } from 'vite';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';

export const aliases = {
  '@': resolve(__dirname, './src'),
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
});
