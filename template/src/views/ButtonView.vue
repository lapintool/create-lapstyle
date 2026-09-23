<script setup lang="ts">
import { onMounted, ref } from "vue";
import { enhance } from "lapstyle";

const root = ref<HTMLElement | null>(null);

onMounted(() => {
  if (root.value) enhance(root.value);
});
</script>

<template>
  <div ref="root" class="page">
    <section class="row">
      <div class="row__label">标准</div>
      <div class="row__body">
        <button type="button" class="ls-btn">默认</button>
        <button type="button" class="ls-btn blue">Blue</button>
        <button type="button" class="ls-btn cyan">Cyan</button>
        <button type="button" class="ls-btn" disabled>禁用</button>
      </div>
    </section>
    <section class="row">
      <div class="row__label">实心 / 尺寸</div>
      <div class="row__body">
        <button type="button" class="ls-btn fill blue">实心</button>
        <button type="button" class="ls-btn flat">扁平</button>
        <button type="button" class="ls-btn sm">小</button>
        <button type="button" class="ls-btn lg blue">大</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.row__label {
  flex: 0 0 88px;
  color: var(--ls-text-dim);
  font-size: 12px;
}

.row__body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
</style>
