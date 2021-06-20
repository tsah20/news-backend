module.exports = {
  env: {
    commonjs: true,
    node: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'context|res|next' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
