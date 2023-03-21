/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // eslint-disable-next-line quotes
    "no-console": "off",
    // eslint-disable-next-line quotes
    "class-methods-use-this": "off",
    // eslint-disable-next-line quotes
    "import/first": "off",
    // eslint-disable-next-line quotes
    "no-param-reassign": "off",
    // eslint-disable-next-line quotes
    "camelcase": "off",
  },
};
