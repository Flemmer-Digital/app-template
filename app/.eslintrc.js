module.exports = {
  root: true,
  extends: ['prettier', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': ['error'],
  },
  globals: {
    afterEach: false,
    beforeEach: false,
    describe: false,
    document: false,
    expect: false,
    fetch: false,
    it: false,
    jest: false,
    window: false,
    __DEV__: false,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
