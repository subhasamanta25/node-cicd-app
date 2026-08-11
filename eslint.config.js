const js = require("@eslint/js");
const jest = require("eslint-plugin-jest");

module.exports = [
  js.configs.recommended,

  {
    ignores: [
      "node_modules/**",
      "coverage/**"
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly"
      }
    }
  },

  {
    files: ["tests/**/*.js"],
    ...jest.configs["flat/recommended"]
  }
];