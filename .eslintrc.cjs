const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["import", "unused-imports"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["prettier"],
      rules: {
        "import/order": [
          "warn",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              ["parent", "sibling"],
              "object",
              "type",
              "index",
            ],
            pathGroups: [
              {
                pattern: "@/**",
                group: "internal",
                position: "before",
              },
            ],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
          },
        ],
        "import/no-default-export": "error",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["page.tsx", "layout.tsx"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
});
