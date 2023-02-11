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
