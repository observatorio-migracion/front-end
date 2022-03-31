module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': [
      'error',
      { exceptMethods: ['ngOnInit', 'parseString', 'goTop', 'renderFirstLetter', 'parseURL'] }
    ],
    'import/extensions': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['methods', 'constructors'] }],
    camelcase: ['error', { allow: ['published_at'] }],
    'no-useless-constructor': 'off'
  }
};
