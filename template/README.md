# __APP_NAME__

Vite + Vue, with Lapstyle already wired.

中文说明：[README.zh.md](./README.zh.md)

```bash
pnpm install
pnpm dev
```

The app opens with a sidebar and a button page. The header’s theme menu sets `data-theme` on `<html>` (`dark`, `light`, `mint`, `sky`, `pink`, `brown`, `amber`). Menu items and routes both come from `src/views.ts`. Edit that list by hand, or add a page:

```bash
pnpm add-view Expand
pnpm add-view Expand 展开面板
```

This creates `src/views/ExpandView.vue` and a sidebar item. The page is empty. On the official demo, use **Copy example**, then overwrite this file or paste the template contents into its root. Do not paste the Playground editor.

Component APIs for coding agents: `node_modules/lapstyle/docs/llms.txt` (then `docs/components/*.md`). Prefer `<ls-*>` tags.

`src/main.ts` imports `lapstyle/index.css`, registers `LapstyleVue`, and calls `enhance(document)` for shell chrome. Page content should use Vue tags. The default theme is `data-theme="dark"`. Other values: `light`, `mint`, `sky`, `pink`, `brown`, `amber`.
