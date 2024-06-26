import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  {
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "brace-style": ["error", "1tbs"],
      "space-infix-ops": "error",
      "id-length": "error",
      "camelcase": "error",
      "eqeqeq": "error",
      "keyword-spacing": "error",
      "func-style": "error",
      "prefer-arrow-callback": "error",
      "no-unneeded-ternary": "error",
      "no-var": "error",
      "prefer-const": "error",
      "one-var": ["error", "never"],
      "no-new-object": "error",
      "no-array-constructor": "error",
      "array-element-newline": ["error", "consistent", {"minItems": 4}],
      "array-bracket-newline": ["error", {"minItems": 4}],
      "function-paren-newline": ["error", {"minItems": 4}],
      "newline-per-chained-call": "error"
    }
  }
];