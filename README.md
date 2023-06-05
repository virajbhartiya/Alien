# Alien

### Prerequisites

You will need to have `node` `npm` and `yarn` installed
globally on your machine.

```
nvm use 14.15.0
```

1. git clone this repo
2. `cd app/client && yarn install --frozen-lockfile && cd ../../ && yarn install --frozen-lockfile`
3. `yarn dev` -- run in dev mode with live updates

### Useful yarn commands

`yarn start` -- run in production mode to test, without packaging
`yarn package` -- to package an app and make executables available in `release` folder

#### for more yarn commands look at `package.json`

### How to run tests

`yarn test` -- run all unit tests
`yarn build-ux && yarn test-ux` -- run User Experience tests (no tests for `app/client` yet)

### TODO: add e2e tests with host + client app interaction

#### run tests of host app

`yarn test-watch-not-silent` -- run tests in watch mode with console logs only for host app, excluding `app/client`
`yarn test -- -u` -- update snapshots

#### run tests for `app/client`

`yarn test` -- run client tests in watch mode
`test:nowatch` -- run client tests a single time
`yarn test -- -u` -- update snapshots

### Generate test coverage results

`yarn coverage` -- when run from project root, generates a coverage report for `host` and `app/client`

### How to regenerate snapshots if you have tests failing when running `yarn test`?

in root `./` folder of project run this:

```
yarn jest --updateSnapshot
```

in Alien Viewer `./app/client` folder of project run this:

```
cd app/client
SKIP_PREFLIGHT_CHECK=true yarn test:nowatch -- -u
```

### Run `yarn test-all` locally to make sure you don't have any errors, before submitting your PR

## Instruction for running a local Sonar Qube, community edition

### Prerequisites

You need to install Sonar Qube community edition for your machine.
And sonar-scanner. Then add sonar scanner to your PATH.

You need to run sonar-scanner separately on root directory
and on `app/client` directory.

Luckily for you sonar scanner is automatically triggered after `husky` checks.
So you only need to install and configure SonarCube locally and
create two separate projects in SonarCube panel.
First project for host app, and second project for client viewer app.
TODO: add how to get started with local SonarCube for Alien in details.

## Documentation
