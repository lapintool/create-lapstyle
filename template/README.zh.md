# __APP_NAME__

Vite + Vue，已经接好 Lapstyle。

English: [README.md](./README.md)

```bash
pnpm install
pnpm dev
```

打开后左侧是菜单，右侧是按钮示例。菜单和路由都来自 `src/views.ts`，也可以手改这一份清单。

```bash
pnpm add-view Expand
pnpm add-view Expand 展开面板
```

会新建 `src/views/ExpandView.vue` 并在侧栏加上这项。页面是空的。到官网组件页点 **Copy example**，用剪贴板覆盖这个文件，或只把 template 里的内容贴进根节点。不要贴 Playground 编辑器里的代码。

`src/main.ts` 引入 `lapstyle/index.css` 并调用 `enhance(document)`。每个页面挂载后再对自己的根节点调用一次 `enhance`，这样后打开的页面也能增强。默认主题是 `data-theme="dark"`，可改成 `light`、`mint`、`sky`、`pink`、`brown`、`amber`。
