module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-constructor': 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: [
          'constructors',
        ],
      },
    ],
  },
};
