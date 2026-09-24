# __APP_NAME__

Vite + Vue，已经接好 Lapstyle。

English: [README.md](./README.md)

```bash
pnpm install
pnpm dev
```

打开后左侧是菜单，右侧是按钮示例。右上角主题菜单会把 `data-theme` 写到 `<html>`（`dark`、`light`、`mint`、`sky`、`pink`、`brown`、`amber`）。菜单和路由都来自 `src/views.ts`，也可以手改这一份清单。

```bash
pnpm add-view Expand
pnpm add-view Expand 展开面板
```

会新建 `src/views/ExpandView.vue` 并在侧栏加上这项。页面是空的。到官网组件页点 **Copy example**，用剪贴板覆盖这个文件，或只把 template 里的内容贴进根节点。不要贴 Playground 编辑器里的代码。

给编程助手看的组件 API：`node_modules/lapstyle/docs/llms.txt`，再读 `docs/components/*.md`。页面内容优先用 `<ls-*>` 标签。

`src/main.ts` 引入 `lapstyle/index.css`、注册 `LapstyleVue`。壳层用 `<ls-menu>` / `<ls-btn-dropdown>`。页面内容优先用 `<ls-*>` 标签。默认主题是 `data-theme="dark"`，可改成 `light`、`mint`、`sky`、`pink`、`brown`、`amber`。
