<script setup lang="ts">
import type { PropType } from "vue";
import type { Company } from "entities/company";

const props = defineProps({
  company: {
    type: Object as PropType<Company | null>,
    default: null,
  },
});

useHead({
  script: [
    {
      src: "https://api-maps.yandex.ru/2.1/?apikey=48723372-2e2f-409b-b2b7-b8caa2590227&lang=ru_RU",
      onload: () => {
        window.ymaps.ready(initMap);
      },
    },
  ],
});

const initMap = () => {
  // eslint-disable-next-line no-new
  new window.ymaps.Map("map", {
    center: props.company?.coords || [55.753994, 37.622093],
    zoom: 14,
    controls: [],
  });
};
</script>

<template>
  <div class="rounded-r-2xl overflow-hidden xl:flex xl:flex-row-reverse">
    <div
      id="map"
      ref="map"
      class="h-[96px] w-full xl:w-[200px] xl:min-h-[132px] xl:shrink-0"
    />
    <div class="p-4 xl:grow xl:p-[20px]">
      <h1 class="mb-2 text-xl font-bold xl:text-2xl">Местоположение</h1>
      <div class="text-sm text-accent xl:text-base">{{ company?.address }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
