module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'jest'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
      },
    ],
  },
}
