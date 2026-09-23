# __APP_NAME__

Vite + Vue, with Lapstyle already wired.

中文说明：[README.zh.md](./README.zh.md)

```bash
pnpm install
pnpm dev
```

The app opens with a sidebar and a button page. Menu items and routes both come from `src/views.ts`. Edit that list by hand, or add a page:

```bash
pnpm add-view Expand
pnpm add-view Expand 展开面板
```

This creates `src/views/ExpandView.vue` and a sidebar item. The page is empty. On the official demo, use **Copy example**, then overwrite this file or paste the template contents into its root. Do not paste the Playground editor.

`src/main.ts` imports `lapstyle/index.css` and calls `enhance(document)`. Each page also calls `enhance` on its own root after mount, so a page opened later is enhanced too. The default theme is `data-theme="dark"`. Other values: `light`, `mint`, `sky`, `pink`, `brown`, `amber`.
