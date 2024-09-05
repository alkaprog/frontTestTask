<script setup lang="ts">
import type { PropType } from "vue";
import { type Good, GoodCard } from "entities/good";

defineProps({
  goods: {
    type: Array as PropType<Good[]>,
    default: () => [],
  },
});
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-4 gap-2">
    <template v-if="goods.length > 0">
      <good-card v-for="good in goods" :key="good.id" :good="good" class="" />
    </template>
    <div v-else>Ничего не найдено :(</div>
  </div>
</template>

<style scoped lang="scss"></style>
