# create-lapstyle

生成一个已经接好 [Lapstyle](https://github.com/lapintool/lapstyle) 的 Vite + Vue 应用。库还没发布到 npm，所以从 GitHub 拉这个脚手架。

English: [README.md](./README.md)

## 用法

```bash
npm create https://github.com/lapintool/lapstyle my-app
pnpm dlx https://github.com/lapintool/create-lapstyle my-app
```

然后：

```bash
cd my-app
pnpm install
pnpm dev
```

`<目录>` 必须是空目录，或尚不存在。安装依赖时 `pnpm`、`npm`、`yarn` 都可以。

`npm create` 会把仓库名改成 `create-<仓库名>`，所以上面写的是 `.../lapstyle`，实际拉取的是 `create-lapstyle`。地址用 HTTPS，避免走 `git@github.com`。`pnpm create` 会给整个参数加 `create-` 前缀，所以 pnpm 用 `dlx`，并写全 `create-lapstyle`。

以后如果包发到 npm，命令会变成 `npm init lapstyle` / `pnpm create lapstyle`。

## 生成结果

- 依赖 `git+https://github.com/lapintool/lapstyle.git#v0.5.1-alpha` 和 `vue-router`
- 左侧菜单、右侧按钮示例。清单在 `src/views.ts`
- `src/main.ts` 引入 `lapstyle/index.css`，注册 `LapstyleVue`
- 壳层用 `<ls-menu>` / `<ls-btn-dropdown>`；按钮页用 `<ls-btn>` / `<ls-btn-group>`
- `index.html` 默认 `data-theme="dark"`
- `AGENTS.md` 指引编程助手先读 `node_modules/lapstyle/docs/llms.txt`

## 加一页并贴示例

```bash
pnpm add-view Expand
pnpm add-view Expand 展开面板
```

新建 `src/views/ExpandView.vue`，侧栏多一项。页面是空的。打开官网组件页，点 **Copy example**，覆盖这个文件，或把 template 内容贴进根节点。不要贴 Playground 里的 `./lapstyle.js`。
