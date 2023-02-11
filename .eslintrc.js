module.exports = {
  extends: ["@operationmonkey/eslint-config-core"],
  parserOptions: {
    project: ["/tsconfig.json", "./packages/*/tsconfig.json"]
  },
  ignorePatterns: ["**/build/**/*"]
}