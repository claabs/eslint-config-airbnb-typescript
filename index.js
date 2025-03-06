const baseFlat = require('./lib/shared-flat');

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
}

const legacyReactConfig = {
  extends: ['./lib/shared'].map((path) => require.resolve(path)),
  ...reactConfig,
}

const flatReactConfig = [
  ...baseFlat,
  reactConfig,
]

const flatConfigs = {
  base: baseFlat,
  react: flatReactConfig,
}

module.exports = {
  ...legacyReactConfig, // This file adds some React specific settings. Not using React? Use base.js instead.
  configs: flatConfigs,
};
