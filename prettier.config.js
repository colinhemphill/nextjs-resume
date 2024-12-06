/** @type {import('prettier').Config} */
const config = {
  jsonRecursiveSort: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-sort-json'],
};

export default config;
