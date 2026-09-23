# __APP_NAME__

Vite + Vue，已经接好 Lapstyle。

```bash
pnpm install
pnpm dev
```

`src/main.ts` 引入 `lapstyle/index.css` 并调用 `enhance(document)`。默认主题是 `data-theme="dark"`，可改成 `light`、`mint`、`sky`、`pink`、`brown`、`amber`。

从官网示例点「复制示例」，把得到的 `.vue` 放进 `src/` 再引用。不要复制 Playground 编辑器里的代码，那里的 `./lapstyle.js` 只用于预览。
