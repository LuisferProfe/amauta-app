import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import typescriptEslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/", "node_modules/", ".astro/"],
  },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: typescriptEslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
    },
  },
];
