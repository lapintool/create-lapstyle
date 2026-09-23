import type { Component } from "vue";

export type AppView = {
  path: string;
  name: string;
  title: string;
  component: () => Promise<{ default: Component }>;
};

/** 侧栏和路由都读这份清单。`pnpm add-view` 会在 end 标记前插入一项。 */
export const views: AppView[] = [
  // lapstyle-views:start
  {
    path: "/button",
    name: "button",
    title: "按钮",
    component: () => import("./views/ButtonView.vue"),
  },
  // lapstyle-views:end
];
