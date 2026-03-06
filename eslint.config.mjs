import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import stylistic from "@stylistic/eslint-plugin"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...stylistic.configs["recommended"].rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^_$", argsIgnorePattern: "^_$" }],

      "@stylistic/semi": ["error", "always"],
      "@stylistic/comma-dangle": [
        "error",
        { arrays: "always-multiline", objects: "always-multiline" }
      ],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/array-bracket-newline": ["error", "consistent"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
      "@stylistic/comma-style": ["error", "last"],
      "@stylistic/computed-property-spacing": ["error", "never"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/function-call-spacing": ["error", "never"],
      "@stylistic/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "@stylistic/no-mixed-spaces-and-tabs": ["error"],
      "@stylistic/indent": ["error", 2],
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_$", argsIgnorePattern: "^_$" }
      ],
    },
  },
]);

export default eslintConfig;
