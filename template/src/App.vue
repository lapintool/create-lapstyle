<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { views } from "./views";

const THEMES = [
  { id: "dark", label: "Dark", swatch: "#111111" },
  { id: "light", label: "Light", swatch: "#ffffff" },
  { id: "mint", label: "Mint", swatch: "#30a46c" },
  { id: "sky", label: "Sky", swatch: "#0ea5e9" },
  { id: "pink", label: "Pink", swatch: "#d7827e" },
  { id: "brown", label: "Brown", swatch: "#c35e0a" },
  { id: "amber", label: "Amber", swatch: "#b58900" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

const THEME_KEY = "lapstyle-theme";
const theme = ref<ThemeId>("dark");
const themeOpen = ref(false);
const route = useRoute();

const title = computed(() => {
  const value = route.meta.title;
  return typeof value === "string" ? value : "__APP_NAME__";
});
const themeLabel = computed(() => THEMES.find((item) => item.id === theme.value)?.label ?? "Dark");
const themeSwatch = computed(() => THEMES.find((item) => item.id === theme.value)?.swatch ?? "#111111");

function isThemeId(value: string | null): value is ThemeId {
  return THEMES.some((item) => item.id === value);
}

function applyTheme(next: ThemeId) {
  theme.value = next;
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    /* private mode */
  }
}

function selectTheme(next: ThemeId) {
  applyTheme(next);
  themeOpen.value = false;
}

function onDocPointerDown(ev: PointerEvent) {
  const target = ev.target as HTMLElement | null;
  if (!target?.closest(".shell__theme")) themeOpen.value = false;
}

onMounted(() => {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(THEME_KEY);
  } catch {
    /* private mode */
  }
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(isThemeId(saved) ? saved : isThemeId(current) ? current : "dark");
  document.addEventListener("pointerdown", onDocPointerDown, true);
});

onUnmounted(() => {
  document.removeEventListener("pointerdown", onDocPointerDown, true);
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
        <div class="ls-btn-dropdown simple shell__theme" :class="{ 'is-open': themeOpen }">
          <button
            type="button"
            class="ls-btn flat rounded dense no-caps"
            aria-label="Theme"
            :aria-expanded="themeOpen"
            @click.stop="themeOpen = !themeOpen"
          >
            <i class="shell__swatch" :style="{ background: themeSwatch }"></i>
            {{ themeLabel }}
            <i class="arrow" aria-hidden="true"></i>
          </button>
          <nav class="ls-card ls-menu end" :hidden="!themeOpen">
            <button
              v-for="item in THEMES"
              :key="item.id"
              type="button"
              class="item"
              :class="{ 'is-active': theme === item.id }"
              @click="selectTheme(item.id)"
            >
              <i class="shell__swatch" :style="{ background: item.swatch }"></i>
              <span class="label">{{ item.label }}</span>
            </button>
          </nav>
        </div>
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
  justify-content: space-between;
  gap: 12px;
  padding: 0 20px;
  border-bottom: 1px solid var(--ls-border);
}

.shell__theme {
  position: relative;
  flex: 0 0 auto;
}

.shell__swatch {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--ls-text) 22%, var(--ls-border));
  flex: 0 0 auto;
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
