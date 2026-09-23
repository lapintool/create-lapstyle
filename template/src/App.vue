<script setup lang="ts">
import { onMounted, ref } from "vue";
import { enhance } from "lapstyle";

const root = ref<HTMLElement | null>(null);

onMounted(() => {
  if (root.value) enhance(root.value);
});
</script>

<template>
  <div ref="root" style="display: flex; align-items: center; gap: 12px; padding: 24px">
    <button type="button" class="ls-btn">Lapstyle</button>
  </div>
</template>
