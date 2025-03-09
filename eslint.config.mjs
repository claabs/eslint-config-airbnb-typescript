/* eslint-disable import/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import airbnbTs from './index.js';

export default [
  { ignores: ['node_modules/'] },
  ...airbnbTs.configs.base,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    files: ['**/*.*js'],
    rules: {
      'import/no-unresolved': 'off', // Doesn't support imports without a "main" field
      'import/no-extraneous-dependencies': 'off', // Issues with peerDependencies
    },
  },
  eslintConfigPrettier,
];
