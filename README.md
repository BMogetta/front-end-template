[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/BMogetta/front-end-template)

<!-- https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge -->


[![Github Actions](https://github.com/BMogetta/front-end-template/workflows/test-and-build.yml/badge.svg)](https://github.com/BMogetta/front-end-template/actions)
[![Github Actions](https://github.com/BMogetta/front-end-template/workflows/semgrep.yml/badge.svg)](https://github.com/BMogetta/front-end-template/actions/semgrep)
[![Github Actions](https://github.com/BMogetta/front-end-template/workflows/semgrep.yml/badge.svg)](https://github.com/BMogetta/front-end-template/actions/Semgrep)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

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
```

# Full documentation links

- [Vite](https://vitejs.dev/guide/)
- [Vitest](https://vitest.dev/guide/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/index.html)
- [pnpm](https://pnpm.io/motivation)

## Dependencies

- [React Routes](https://reactrouter.com/en/main/start/tutorial)
- [vite-tsconfig-path](https://github.com/aleclarson/vite-tsconfig-paths#readme)
- [testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## Testing info

- [Common mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [queries priority](https://testing-library.com/docs/queries/about#priority)
