/** @type {import('prettier').Config} */
const config = {
  jsonRecursiveSort: true,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-sort-json'],
  singleQuote: true,
  tailwindAttributes: ['errorClassName', 'containerClassName', 'tw'],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['twMerge', 'cva', 'cn'],
  trailingComma: 'all',
};

export default config;
