/// <reference types="vite/client" />

export {};

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}
