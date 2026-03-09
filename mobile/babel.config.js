module.exports = function (api) {
  api.cache(true);
  let plugins = [];

  // Ensure worklets and reanimated plugins are included with unique names to avoid
  // "Duplicate plugin/preset detected" errors when multiple packages add similar plugins.
  plugins.push(['react-native-worklets/plugin', {}, 'worklets-plugin']);
  // Reanimated plugin must be listed last and given a unique name.
  plugins.push(['react-native-reanimated/plugin', {}, 'reanimated-plugin']);

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

    plugins,
  };
};
