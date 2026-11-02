import { defineConfig } from 'oxfmt';

export default defineConfig({
  ignorePatterns: ['next-env.d.ts'],
  sortTailwindcss: {
    functions: ['twMerge', 'cva', 'cn', 'uiCn', 'clsx'],
    attributes: ['tw'],
  },
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  sortPackageJson: { sortScripts: true },
  sortImports: {
    newlinesBetween: false,
    order: 'asc',
    ignoreCase: true,
    partitionByComment: false,
    partitionByNewline: false,
    sortSideEffects: true,
    groups: [],
  },
  embeddedLanguageFormatting: 'off',
});
