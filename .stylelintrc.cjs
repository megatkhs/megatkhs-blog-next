const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  ignoreFiles: ["**/node_modules/**"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": [sortOrderSmacss()],
    "no-duplicate-selectors": null,
    "length-zero-no-unit": [
      true,
      {
        ignore: ["custom-properties"],
      },
    ],
    "selector-class-pattern": "^(([a-z][a-zA-Z0-9_]+)|([a-z][a-z0-9]*)(-[a-zA-Z0-9_]+)*)$",
  },
};
