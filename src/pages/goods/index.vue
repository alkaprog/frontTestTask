<script setup lang="ts">
import { getGoodList, type Good, goodFilterOptions } from "entities/good";
import GoodList from "widgets/good/GoodList.vue";
import { GoodsFilter } from "widgets/good";

definePageMeta({
  layout: "main-layout",
});

const selectedFilter = ref(goodFilterOptions[0].value);
const goods = ref<Good[]>([]);

const fetchGoods = async (category: number) => {
  const { data, status } = await getGoodList(category);
  if (status.value === "success" && data.value) {
    goods.value = data.value;
  }
};

watch(selectedFilter, (selectedFilter) => fetchGoods(selectedFilter));

await fetchGoods(selectedFilter.value);
</script>

<template>
  <div class="w-full flex flex-col items-center p-8">
    <goods-filter v-model="selectedFilter" />
    <good-list v-if="goods" :goods="goods" class="w-full" />
  </div>
</template>

<style scoped lang="scss"></style>
