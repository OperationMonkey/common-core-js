# @operationmonkey/lint-staged-config-core

## Install

```
npm install --save-dev --save-exact @operationmonkey/lint-staged-config-core
```

## Use

Create `lint-staged.config.js` with content: 

```
module.exports = require("@operationmonkey/lint-staged-config-core")
```

Add hook with command(s):

```
npx husky add .husky/pre-commit "npx lint-staged"
npx husky install
```
