const commonRules = {
  eqeqeq: "error",
  quotes: ["error", "double"],
  "padding-line-between-statements": [
    "error",
    { blankLine: "always", prev: "*", next: "function" },
    { blankLine: "always", prev: "function", next: "*" },
    { blankLine: "always", prev: "throw", next: "*" },
    { blankLine: "always", prev: "*", next: "return" },
    { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
    { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
  ],
  "comma-dangle": [
    "error",
    {
      arrays: "only-multiline",
      objects: "only-multiline",
      imports: "only-multiline",
      exports: "only-multiline",
      functions: "never",
    },
  ],
};

const commonTsRules = {
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/semi": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/explicit-function-return-type": "error",
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    {
      accessibility: "explicit",
      overrides: {
        accessors: "off",
      },
    },
  ],
  "no-return-await": "off",
  "@typescript-eslint/return-await": ["error", "in-try-catch"],
  "import/order": [
    "error",
    {
      alphabetize: {
        order: "asc",
      },
      "newlines-between": "always-and-inside-groups",
    },
  ],
  "import/extensions": "error",
  "import/no-unused-modules": ["error", { unusedExports: true }],
  "import/no-default-export": "error",
  "fp/no-arguments": "error",
  "fp/no-loops": "error",
  "func-style": ["error", "declaration"],
  ...commonRules,
};

const reactOptions = {
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
};

const reactRules = {
  "react/prop-types": "off",
};

const jestRules = {
  "jest/no-disabled-tests": "warn",
  "jest/no-focused-tests": "warn",
  "jest/no-identical-title": "error",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/unbound-method": "off",
};

module.exports = {
  overrides: [
    {
      files: ["**/*.json"],
      extends: ["plugin:json/recommended"],
    },
    {
      files: ["**/*.js"],
      parserOptions: {
        ecmaVersion: "latest",
      },
      env: {
        es6: true,
      },
      rules: { ...commonRules },
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      plugins: ["fp"],
      rules: { ...commonTsRules },
    },
    {
      files: ["**/*.tsx"],
      parser: "@typescript-eslint/parser",
      ...reactOptions,
      extends: [
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/jsx-runtime",
      ],
      plugins: ["fp"],
      rules: {
        ...commonTsRules,
        ...reactRules,
      },
    },
    {
      files: ["**/*.spec.ts", "**/*.test.ts", "**/__tests__/**/*", "**/__mocks__/**/*"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      plugins: ["jest", "fp"],
      rules: {
        ...commonTsRules,
        ...jestRules,
      },
    },
    {
      files: ["**/*.spec.tsx", "**/*.test.tsx"],
      parser: "@typescript-eslint/parser",
      ...reactOptions,
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/jsx-runtime",
      ],
      plugins: ["jest", "fp"],
      rules: {
        ...commonTsRules,
        ...reactRules,
        ...jestRules,
      },
    },
  ],
  rules: {},
};
