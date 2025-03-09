const { FlatCompat } = require('@eslint/eslintrc');
const { convertConfigs } = require('./lib/convert-configs');
const sharedFlat = require('./lib/shared-flat');

const compat = new FlatCompat();

const reactConfig = {
  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    // Prepend 'mjs' to match shared config
    // Original: ['.js', '.jsx', '.json']
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // Original: ['.jsx']
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};

const legacyReactConfig = {
  extends: ['./lib/shared'].map((path) => require.resolve(path)),
  ...reactConfig,
};

const flatReactConfig = [
  ...convertConfigs(compat.extends('eslint-config-airbnb')),
  ...sharedFlat,
  reactConfig,
];

const flatBaseConfig = [
  ...convertConfigs(compat.extends('eslint-config-airbnb-base')),
  ...sharedFlat,
];

const flatConfigs = {
  base: flatBaseConfig,
  react: flatReactConfig,
};

module.exports = {
  ...legacyReactConfig, // This file adds some React specific settings. Not using React? Use base.js instead.
  configs: flatConfigs,
};
