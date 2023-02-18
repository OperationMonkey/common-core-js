# @operationmonkey/eslint-config-core

## Install

```
npm install --save-dev --save-exact @operationmonkey/eslint-config-core @operationmonkey/tsconfig-core
```

## Use

Create `.eslintrc.js` with content: 

```
module.exports = {
  extends: ["@operationmonkey/eslint-config-core"],
  parserOptions: {
    project: ["./tsconfig.json"]
  }
}
```

With React projects using vite, also add: 

```
projects: ["./tsconfig.json", "./vite.config.ts"]
```
