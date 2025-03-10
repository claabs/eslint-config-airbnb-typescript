const { FlatCompat } = require('@eslint/eslintrc');
const sharedFlat = require('./lib/shared-flat');
const reactFlat = require('./lib/react-flat');
const reactConfig = require('./lib/react');

const compat = new FlatCompat();

module.exports = {
  extends: ['./lib/shared'].map((path) => require.resolve(path)),
  ...reactConfig,
};

const configs = {
  base: [...compat.extends('eslint-config-airbnb-base'), ...sharedFlat],
  react: [...compat.extends('eslint-config-airbnb'), ...sharedFlat, reactFlat],
};

Object.defineProperty(module.exports, 'configs', {
  value: configs,
  configurable: false,
  enumerable: false,
  writable: false,
});
