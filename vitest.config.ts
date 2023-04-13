/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@content': path.resolve(__dirname, './.contentlayer/generated'),
      '@test-utils': path.resolve(__dirname, './src/test-utils.tsx'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
