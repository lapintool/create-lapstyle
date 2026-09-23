import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2).filter((arg) => arg !== "--");
const rawName = args[0];
const titleArg = args.slice(1).join(" ").trim();

if (!rawName || rawName === "-h" || rawName === "--help") {
  console.log(`用法：
  pnpm add-view Expand
  pnpm add-view Expand 展开面板

名称用英文，Expand 和 ExpandView 都可以。
会新建 src/views/<名称>View.vue，并在侧栏加一项。页面是空的，把官网「复制示例」贴进去。
`);
  process.exit(rawName ? 0 : 1);
}

const base = rawName.replace(/View$/i, "");
if (!/^[A-Za-z][A-Za-z0-9]*$/.test(base)) {
  console.error("名称请用英文，例如 Expand 或 ExpandView");
  process.exit(1);
}

const pascal = base[0].toUpperCase() + base.slice(1);
const name = pascal.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const title = titleArg || pascal;
const fileName = `${pascal}View.vue`;
const viewFile = join(root, "src", "views", fileName);
const viewsFile = join(root, "src", "views.ts");
const marker = "  // lapstyle-views:end";

if (existsSync(viewFile)) {
  console.error(`页面已存在：src/views/${fileName}`);
  process.exit(1);
}

const viewsText = readFileSync(viewsFile, "utf8");
if (!viewsText.includes(marker)) {
  console.error("src/views.ts 里找不到 lapstyle-views:end，无法登记菜单。");
  process.exit(1);
}
if (viewsText.includes(`name: "${name}"`) || viewsText.includes(`name: '${name}'`)) {
  console.error(`路由已存在：/${name}`);
  process.exit(1);
}

const entry = `  {
    path: ${JSON.stringify(`/${name}`)},
    name: ${JSON.stringify(name)},
    title: ${JSON.stringify(title)},
    component: () => import("./views/${fileName}"),
  },
`;

writeFileSync(viewFile, vueFile());
writeFileSync(viewsFile, viewsText.replace(marker, `${entry}${marker}`));

console.log(`已添加 /${name}
  src/views/${fileName}
  侧栏：${title}

把官网「复制示例」的内容覆盖这个文件，或贴进 template 里的根节点。
`);

function vueFile() {
  return `<script setup lang="ts">
import { onMounted, ref } from "vue";
import { enhance } from "lapstyle";

const root = ref<HTMLElement | null>(null);

onMounted(() => {
  if (root.value) enhance(root.value);
});
</script>

<template>
  <div ref="root" class="page">
    <!-- 用官网「复制示例」覆盖本文件，或把 template 内容贴进这个根节点。 -->
  </div>
</template>
`;
}
