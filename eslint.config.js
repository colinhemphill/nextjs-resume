import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const reactRecommended = reactPlugin.configs.flat?.recommended;
const jsxRuntime = reactPlugin.configs.flat?.['jsx-runtime'];

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  unicorn.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
  eslintConfigPrettier,
  reactRecommended,
  jsxRuntime,
  {
    languageOptions: {
      ...reactRecommended?.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactRecommended?.rules,
      ...jsxRuntime?.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-literals': 'off',
      'react/no-unknown-property': ['error', { ignore: ['tw'] }],
    },
    settings: {
      ...reactRecommended?.rules,
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: ['.next/*'],
  },
);
