import js from '@eslint/js';
import cypress from 'eslint-plugin-cypress';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      cypress,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...cypress.environments.globals,
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
    },
  },
];
