<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { views } from "./views";

const route = useRoute();
const title = computed(() => {
  const value = route.meta.title;
  return typeof value === "string" ? value : "__APP_NAME__";
});
</script>

<template>
  <div class="shell">
    <aside class="shell__side">
      <strong class="shell__brand">__APP_NAME__</strong>
      <nav class="ls-menu fill">
        <RouterLink
          v-for="view in views"
          :key="view.name"
          class="item"
          active-class="is-active"
          :to="view.path"
        >
          <span class="label">{{ view.title }}</span>
        </RouterLink>
      </nav>
    </aside>
    <div class="shell__main">
      <header class="shell__bar">
        <h1 class="shell__title">{{ title }}</h1>
      </header>
      <main class="shell__page">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.shell {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  height: 100%;
}

.shell__side {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
  padding: 16px 12px;
  border-right: 1px solid var(--ls-border);
  background: var(--ls-bg);
}

.shell__brand {
  padding: 0 8px;
  font-size: 15px;
}

.shell__side .ls-menu {
  min-height: 0;
  overflow: auto;
}

.shell__main {
  display: grid;
  grid-template-rows: 48px minmax(0, 1fr);
  min-width: 0;
  min-height: 0;
}

.shell__bar {
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid var(--ls-border);
}

.shell__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.shell__page {
  min-height: 0;
  overflow: auto;
  padding: 20px;
}

@media (max-width: 720px) {
  .shell {
    grid-template-columns: 1fr;
    grid-template-rows: auto minmax(0, 1fr);
  }

  .shell__side {
    flex-direction: row;
    align-items: center;
    border-right: 0;
    border-bottom: 1px solid var(--ls-border);
  }

  .shell__side .ls-menu {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
  }
}
</style>
