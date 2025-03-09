const stylistic = require('@stylistic/eslint-plugin');

const deprecatedFormattingRules = Object.keys(stylistic.configs['disable-legacy']);

const replacePluginName = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      let newKey = key;
      // Replace deprecated formatting rules with stylistic.
      if (deprecatedFormattingRules.includes(key)) {
        const ruleName = key.split('/').at(-1);
        newKey = `@stylistic/${ruleName}`;
      }
      return [newKey, value];
    }),
  );

const convertConfigs = (configs) =>
  configs.map((config) => {
    let newConfig = config;
    if ('settings' in config) {
      newConfig = Object.assign(newConfig, { settings: replacePluginName(config.settings) });
    }
    if ('rules' in config) {
      newConfig = Object.assign(newConfig, { rules: replacePluginName(config.rules) });
    }
    return newConfig;
  });

module.exports = { convertConfigs };
