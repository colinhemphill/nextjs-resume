import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['unicorn', 'nextjs', 'typescript'],
  env: {
    builtin: true,
    es2026: true,
  },
  ignorePatterns: [
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.contentlayer/**',
    'public/**/sw.js',
    '.source/**',
  ],
});
