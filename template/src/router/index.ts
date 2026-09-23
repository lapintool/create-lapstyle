import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { views } from "../views";

const pages: RouteRecordRaw[] = views.map((view) => ({
  path: view.path,
  name: view.name,
  component: view.component,
  meta: { title: view.title },
}));

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", redirect: "/button" }, ...pages],
});
