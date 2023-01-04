[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/BMogetta/front-end-template)

<!-- https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge -->

[![Test&Build](https://github.com/BMogetta/front-end-template/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/BMogetta/front-end-template/actions/workflows/test-and-build.yml)
[![Semgrep](https://github.com/BMogetta/front-end-template/actions/workflows/semgrep.yml/badge.svg)](https://github.com/BMogetta/front-end-template/actions/workflows/semgrep.yml)
[![GitGuardian](https://github.com/BMogetta/front-end-template/actions/workflows/gitguardian.yml/badge.svg)](https://github.com/BMogetta/front-end-template/actions/workflows/gitguardian.yml)
[![Snyk](https://github.com/BMogetta/front-end-template/actions/workflows/snyk.yml/badge.svg)](https://github.com/BMogetta/front-end-template/actions/workflows/snyk.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## GHA security checks
This template uses Semgrep, Snyk and GitGuardian on GitHub Actions. They required API keys to work. If you want to use them create an account with them and store the keys in GH secrets:
```
GITGUARDIAN_API_KEY=xxxxxxxxxx
SNYK_TOKEN=yyyyyyyyyyyy
SEMGREP_APP_TOKEN=zzzzzzzzzz
```

## Hooks
This template uses husky to trigger 3 hooks.
 * Pre-commit: it'll run `pnpm lint-staged` and lint all staged files cover by any linting rule.
 * Commit-msg: it'll enforce [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
 * Pre-push: it'll run `pnpm test` and `pnpm build` to ensure you only push working code.

## Build Setup

```bash
# install pnpm
$ npm install -g pnpm

# install dependencies
$ pnpm install

# serve with hot reload at [localhost:3000](http://localhost:3000/)
$ pnpm dev
```

## VSCode Plugins

- [Vite plugin](https://marketplace.visualstudio.com/items?itemName=antfu.vite)
- [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vitest plugin](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)

## Steps in Vscode

1. Install and enable Eslint and Prettier extension for vs code.
2. Install packages.
3. Enable formatOnSave of vs code

## Basic scripts

```bash
# run dev enviroment
$ pnpm dev

# run linter
$ pnpm lint

# upgrade pnpm
$ pnpm upgrade

# test
$ pnpm test

# test with watch mode
$ pnpm test:watch

# pnpm ps1 error
$ set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# build&preview
$ pnpm build
$ pnpm serve

# clean node_modules, build folder and coverage
$ pnpm clean
```

# Full documentation links

- [Vite](https://vitejs.dev/guide/)
- [Vitest](https://vitest.dev/guide/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/index.html)
- [pnpm](https://pnpm.io/motivation)
- [Husky](https://typicode.github.io/husky/#/)

## Dependencies

- [React Routes](https://reactrouter.com/en/main/start/tutorial)
- [Jotai](https://jotai.org/docs/introduction)
- [vite-tsconfig-path](https://github.com/aleclarson/vite-tsconfig-paths#readme)
- [testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Conventional Commints](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [lint-staged](https://github.com/okonet/lint-staged)

## Testing info

- [Common mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [queries priority](https://testing-library.com/docs/queries/about#priority)
