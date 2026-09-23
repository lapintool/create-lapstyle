#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const templateDir = join(here, "template");

function usage() {
  console.log(`用法：
  npm create https://github.com/lapintool/lapstyle <目录>
  pnpm dlx https://github.com/lapintool/create-lapstyle <目录>

示例：
  npm create https://github.com/lapintool/lapstyle my-app
`);
}

const args = process.argv.slice(2).filter((arg) => arg !== "--");
if (args.includes("-h") || args.includes("--help") || args.length === 0) {
  usage();
  process.exit(args.includes("-h") || args.includes("--help") ? 0 : 1);
}

const dirArg = args.find((arg) => !arg.startsWith("-"));
if (!dirArg) {
  usage();
  process.exit(1);
}

const target = resolve(dirArg);
if (existsSync(target) && readdirSync(target).filter((name) => name !== ".git").length > 0) {
  console.error(`目录不是空的：${target}`);
  process.exit(1);
}

const rawName = dirArg === "." ? "lapstyle-app" : dirArg.split(/[\\/]/).filter(Boolean).pop() || "lapstyle-app";
const appName = rawName.toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/^-+|-+$/g, "") || "lapstyle-app";

mkdirSync(target, { recursive: true });
cpSync(templateDir, target, { recursive: true });

for (const rel of ["package.json", "index.html", "README.md"]) {
  const filePath = join(target, rel);
  const text = readFileSync(filePath, "utf8").replaceAll("__APP_NAME__", appName);
  writeFileSync(filePath, text);
}

console.log(`已创建 ${target}

下一步：
  cd ${dirArg}
  pnpm install
  pnpm dev

src/main.ts 已经引入 lapstyle/index.css，并调用 enhance(document)。
官网示例的「复制示例」得到的 Vue 组件可以直接放进 src/。
`);
