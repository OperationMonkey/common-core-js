# @operationmonkey/commitlint-config-core

## Install

```
npm install --save-dev --save-exact @operationmonkey/commitlint-config-core
```

## Use

Create `commitlint.config.js` with content:

```
module.exports = {
  extends: ['@operationmonkey/commitlint-config-core']
}
```

Make sure you have `husky` installed and prepared  
and create file `.husky/commit-msg` with content:

```
npx --no -- commitlint --edit $1
```
