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

Add hook in file `.husky/pre-commit`:

```
npx lint-staged
```
