<script setup lang="ts">
import type { PropType } from "vue";
import type { Company } from "entities/company";

defineProps({
  company: {
    type: Object as PropType<Company | null>,
    default: null,
  },
});
</script>

<template>
  <div class="p-4 rounded-2xl bg-bg-light-grey opacity-30 xl:p-[20px]">
    <h2 class="mb-2 text-xl font-bold xl:text-2xl">Режим работы</h2>
    <div class="text-sm xl:text-base">Сегодня {{ company?.schedule }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
