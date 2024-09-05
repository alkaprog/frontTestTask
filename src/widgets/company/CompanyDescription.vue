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
  <div class="p-4 xl:p-[20px]">
    <h1 class="mb-2 text-xl font-bold xl:text-2xl">О компании</h1>
    <div class="text-sm xl:text-base">{{ company?.description }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
