/* eslint-disable no-undef */
module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '*.@(js|ts|tsx)': ['eslint --fix', 'prettier --write'],
  '*.@*(scss)': 'stylelint --syntax=scss',
};
