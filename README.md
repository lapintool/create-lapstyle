# create-lapstyle

生成一个已经接好 [Lapstyle](https://github.com/lapintool/lapstyle) 的 Vite + Vue 应用。库还没发布到 npm，所以从 GitHub 拉这个脚手架。

## 用法

```bash
npm create github:lapintool/create-lapstyle my-app
pnpm create github:lapintool/create-lapstyle my-app
yarn create github:lapintool/create-lapstyle my-app
```

然后：

```bash
cd my-app
pnpm install
pnpm dev
```

`pnpm`、`npm`、`yarn` 都可以。`<目录>` 必须是空目录，或尚不存在。

生成结果：

- 依赖 `github:lapintool/lapstyle#v0.4.1-alpha`
- `src/main.ts` 引入 `lapstyle/index.css`，并调用 `enhance(document)`
- `index.html` 默认 `data-theme="dark"`

## 贴示例

打开 [lapstyle-ui](https://github.com/lapintool/lapstyle) 官网的组件页，点该行的**复制示例**。剪贴板里是一份 Vue 单文件组件：

- `import { enhance } from "lapstyle"`
- 挂载后对组件根节点调用 `enhance`
- 不包含 Playground 里的 `./lapstyle.js`、`./lapstyle.css`

把文件放进 `src/`，在 `App.vue` 里引用。样式只在 `main.ts` 引一次。对话框示例用 `open` 控制显隐。

以后如果包发到 npm，同一条命令会变成 `npm init lapstyle` / `pnpm create lapstyle` / `yarn create lapstyle`。

## English

```bash
npm create github:lapintool/create-lapstyle my-app
```

This scaffolds Vite + Vue with `lapstyle/index.css` and `enhance(document)` already wired. Paste a component from the official demo’s **Copy example** button into `src/`. Do not paste the Playground preview, which rewrites imports to virtual files.
