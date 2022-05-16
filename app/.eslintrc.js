module.exports = {
  root: true,
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': ['error'],
    'max-len': ['error', {code: 100}],
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
