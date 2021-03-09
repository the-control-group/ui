[![npm (scoped)](https://img.shields.io/npm/v/@the-control-group/ui.svg?style=flat-square)](https://www.npmjs.com/package/@the-control-group/ui)

# ui
UI kit for pubrec products, built on React

To see documentation, navigate here: https://the-control-group.github.io/ui/

## Batteries not included
This package does not come transpiled - the importing library is responsible for setting proper browser targets and transpilation options.


## Publish Release
- Make a new branch called `release/x.x.x` for the version number
- run `npm version <major|minor|patch>` to automatically update `package.json`, `package-lock.json`, and create a git tag
- be sure to push the branch with the `--tags` option
- after merging into `master`, create a new release from the pushed tag and GitHub actions will publish to `npm` and GH package registry
