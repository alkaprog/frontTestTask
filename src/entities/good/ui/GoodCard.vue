<script setup lang="ts">
import type { PropType } from "vue";
import { type Good } from "entities/good";
import { IconDate } from "shared/assets/icons";
import { declOfNum, getDaysDiff, VButton } from "shared";

const props = defineProps({
  good: {
    type: Object as PropType<Good>,
    default: null,
  },
});

const daysPassedSinceCreation = computed(() => {
  const countOfDaysPassed = getDaysDiff(
    props.good?.creationDate as number,
    Date.now(),
  );
  return `${countOfDaysPassed} ${declOfNum(countOfDaysPassed, ["день", "дня", "дней"])}`;
});
</script>

<template>
  <v-card>
    <div class="p-3 relative">
      <v-img cover :src="good?.photo" class="w-full h-[328px] xl:h-[322px]" />
      <div>{{ good?.price }} Р</div>
      <div>{{ good?.name }}</div>
      <div>
        <div v-if="good?.status === 'boosted'">Объявление продвигается</div>
        <div v-else-if="good?.status === 'hidden'">Объявление скрыто</div>
        <div v-else class="flex justify-between">
          <div>Увеличьте количество просмотров</div>
          <v-button>Продвигать</v-button>
        </div>
      </div>
      <div class="absolute top-3">
        <v-chip>
          {{ good?.viewsCount }}
        </v-chip>
        <v-chip>
          <icon-date class="h-5 w-5" />
          {{ daysPassedSinceCreation }}
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss"></style>
