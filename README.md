# create-lapstyle

Scaffold a Vite + Vue app that already uses [Lapstyle](https://github.com/lapintool/lapstyle). The library is not on npm yet, so this starter is installed from GitHub.

中文说明：[README.zh.md](./README.zh.md)

## Usage

```bash
npm create https://github.com/lapintool/lapstyle my-app
pnpm dlx https://github.com/lapintool/create-lapstyle my-app
```

Then:

```bash
cd my-app
pnpm install
pnpm dev
```

`<dir>` must be missing or empty. `pnpm`, `npm`, or `yarn` can install dependencies inside the app.

`npm create` rewrites the repository name to `create-<name>`, so the npm command uses `.../lapstyle` and still clones `create-lapstyle`. The URL is HTTPS, so git does not use `git@github.com`. `pnpm create` prefixes the whole argument with `create-`, so pnpm uses `dlx` and the full `create-lapstyle` name.

After an npm publish, the commands become `npm init lapstyle` and `pnpm create lapstyle`.

## What you get

- Dependency `git+https://github.com/lapintool/lapstyle.git#v0.4.1-alpha` and `vue-router`
- A sidebar and a button page. Both the menu and the routes read `src/views.ts`
- `src/main.ts` imports `lapstyle/index.css` and calls `enhance(document)`
- `index.html` defaults to `data-theme="dark"`

## Add a page and paste an example

```bash
pnpm add-view Expand
pnpm add-view Expand 展开面板
```

This creates `src/views/ExpandView.vue` and a sidebar item. The page is empty. On the official demo, use **Copy example**, then overwrite that file or paste the template contents into its root. Do not paste the Playground editor. Its `./lapstyle.js` exists only for the preview.
