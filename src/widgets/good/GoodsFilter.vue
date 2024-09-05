<script setup lang="ts">
import { useDeviceDetector, VGroupSelect } from "shared";
import { goodFilterOptions } from "entities/good";
import { GoodsFilterModal } from "features";

const { isDesktop } = useDeviceDetector();

const selectedFilter = defineModel<number>();

const isGoodsFilterDialogVisible = ref(false);

const onSelectClick = () => {
  if (!isDesktop.value) {
    isGoodsFilterDialogVisible.value = true;
  }
};
</script>

<template>
  <client-only>
    <v-group-select
      v-model="selectedFilter"
      class="w-full max-w-[350px]"
      :items="goodFilterOptions"
      @click="onSelectClick"
    />
    <goods-filter-modal
      v-if="isGoodsFilterDialogVisible"
      v-model="selectedFilter"
      v-model:visible="isGoodsFilterDialogVisible"
    />
  </client-only>
</template>

<style scoped lang="scss"></style>
