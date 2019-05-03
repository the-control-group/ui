[![npm (scoped)](https://img.shields.io/npm/v/@the-control-group/ui.svg?style=flat-square)](https://www.npmjs.com/package/@the-control-group/ui)

# ui
UI kit for pubrec products, built on React

To see documentation, navigate here: https://the-control-group.github.io/ui/

## Batteries not included
This package does not come transpiled - the importing library is responsible for setting proper browser targets and transpilation options.


## Publish Release
It’s a standard NPM release process.
Make a new branch called `release/x.x.x` for w/e the version number is, then run `npm version <version#>` to update the package.json
Then merge that into master, create a git release, and run `npm publish`
And follow the semver pattern obviously
