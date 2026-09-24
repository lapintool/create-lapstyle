# Agent notes

This app uses **Lapstyle** Vue components (`<ls-*>` from `lapstyle/vue`).

Before inventing markup, read:

1. `node_modules/lapstyle/docs/llms.txt`
2. `node_modules/lapstyle/docs/getting-started.md`
3. The matching file under `node_modules/lapstyle/docs/components/` (e.g. `ls-dialog.md`)
4. `node_modules/lapstyle/src/vue/index.d.ts`

Rules:

- Prefer `app.use(LapstyleVue)` + `import "lapstyle/index.css"` already wired in `src/main.ts`.
- Use `v-model` / events / slots from those docs. Do not copy class-only HTML from demos.
- The shell already uses `<ls-menu>` and `<ls-btn-dropdown>`. Page content should be Vue tags; do not call `enhance(document)`.
- Theme is `<html data-theme="dark|light|mint|sky|pink|brown|amber">`.
- If the docs are not enough, then read `node_modules/lapstyle/src/vue/<Name>.vue`.
