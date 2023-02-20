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

Make sure you have `husky` installed and prepared. Then run command: 

```
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

or create file `.husky/commit-msg` with content (and chmod +x): 

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit $1
```
