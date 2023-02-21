# Common Core JS

All commits to this repository must follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). This makes sure version tags are updated correctly. 

## first release of package

```
npm run -w packages/<package-name> release -- --first-release
git push --tags origin main
```

## releasing updates to package:

```
npm run -w packages/<package> release
git push --tags origin main
```

## Starting a new project

Run the following commands:

```
npm init
npm install --save-dev --save-exact \
  @operationmonkey/commitlint-config-core \
  @operationmonkey/eslint-config-core \
  @operationmonkey/lint-staged-config-core \
  @operationmonkey/node-jest-config-core \
  @operationmonkey/tsconfig-core
npm install --save-dev --save-exact husky
git init
npx husky install
echo 'module.exports = require("@operationmonkey/commitlint-config-core")' > .commitlint.config.js
echo 'module.exports = require("@operationmonkey/lint-staged-config-core")' > lint-staged.config.js
echo 'module.exports = require("@operationmonkey/node-jest-config-core")' > jest.config.js

npx husky add .husky/commit-msg 'npx --no -- commitlint --edit {$1}'
npx husky add .husky/pre-commit 'npx lint-staged'
npx husky install
```

Add `.eslintrc.js` with content: 

```
module.exports = {
  extends: ["@operationmonkey/eslint-config-core"],
  parserOptions: {
    project: ["./tsconfig.json"]
  }
}
```

Finally add `tsconfig.json` with content: 

```
{
  "extends": "@operationmonkey/tsconfig-core"
}
```

Project should be ready for development and you can add test automation: 

```
on:
  pull_request:
    branches: [main]

jobs:
  test-and-lint:
    uses: OperationMonkey/shared-workflows/.github/workflows/test_and_lint.yml@main
```

