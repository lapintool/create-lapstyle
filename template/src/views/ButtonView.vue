<script setup lang="ts">
// LapstyleVue is registered in main.ts — use <ls-btn> tags directly.
</script>

<template>
  <div class="page">
    <section class="row">
      <div class="row__label">标准</div>
      <div class="row__body">
        <ls-btn>默认</ls-btn>
        <ls-btn color="blue">Blue</ls-btn>
        <ls-btn color="cyan">Cyan</ls-btn>
        <ls-btn disabled>禁用</ls-btn>
      </div>
    </section>
    <section class="row">
      <div class="row__label">实心 / 尺寸</div>
      <div class="row__body">
        <ls-btn color="blue" variant="fill">实心</ls-btn>
        <ls-btn variant="flat">扁平</ls-btn>
        <ls-btn size="sm">小</ls-btn>
        <ls-btn color="blue" size="lg">大</ls-btn>
      </div>
    </section>
    <section class="row">
      <div class="row__label">按钮组</div>
      <div class="row__body">
        <ls-btn-group>
          <ls-btn>One</ls-btn>
          <ls-btn>Two</ls-btn>
          <ls-btn>Three</ls-btn>
        </ls-btn-group>
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
