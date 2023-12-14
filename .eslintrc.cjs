module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:cypress/recommended",
    "standard",
    "prettier",
  ],
  overrides: [
    {
      files: ["cypress/**/*.js"],
      rules: {
        "testing-library/await-async-queries": "off",
        "testing-library/prefer-screen-queries": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "use-encapsulation", "testing-library", "jest-dom"],
  rules: { "use-encapsulation/prefer-custom-hooks": 1 },
  settings: {
    react: {
      version: "detect",
    },
  },
};
