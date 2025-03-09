const sharedFlat = require('./lib/shared-flat');
const reactFlat = require('./lib/react-flat');
const reactConfig = require('./lib/react');

module.exports = {
  extends: ['./lib/shared'].map((path) => require.resolve(path)),
  ...reactConfig,
};

const configs = {
  base: sharedFlat,
  react: reactFlat,
};

Object.defineProperty(module.exports, 'configs', {
  value: configs,
  configurable: false,
  enumerable: false,
  writable: false,
});
