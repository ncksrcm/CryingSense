<<<<<<< HEAD
// https://docs.expo.dev/guides/using-eslint/
=======
/* eslint-env node */
>>>>>>> abfc7f8 (Add mobile folder to main CryingSense repo)
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
<<<<<<< HEAD
=======
  {
    rules: {
      'react/display-name': 'off',
    },
  },
>>>>>>> abfc7f8 (Add mobile folder to main CryingSense repo)
]);
