<script setup lang="ts">
import type { PropType } from "vue";
import type { Agent } from "entities/agent";
import { IconApproved, IconStar } from "shared/assets/icons";

const props = defineProps({
  agent: {
    type: Object as PropType<Agent>,
    default: null,
  },
});

const isAgentApproved = computed(() => props.agent?.isApproved || false);
const agentRating = computed(() => props.agent?.rating || 0);
const agentReviewsCount = computed(() => props.agent?.reviewsCount || 0);
</script>

<template>
  <v-card>
    <div class="flex justify-between p-3">
      <v-avatar class="xl:!w-[140px] xl:!h-[140px]">
        <v-img :src="agent.photo"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="font-bold"> {{ agent?.name }}</v-card-title>
        <div class="flex justify-center text-sm leading-5 mt-3 gap-1">
          <div v-if="isAgentApproved" class="flex items-center gap-1">
            <icon-approved class="h-4 w-4" />
            <div>Проверен</div>
            <div>•</div>
          </div>
          <div class="flex items-center gap-1">
            <icon-star class="h-4 w-4"></icon-star>
            <div>{{ agentRating }}</div>
            <div>•</div>
          </div>
          <div class="flex items-center gap-1">
            <div>{{ agentReviewsCount }}</div>
            <div>отзывов</div>
          </div>
        </div>
        <v-card-subtitle class="!whitespace-normal agent-description">
          {{ agent?.description }}</v-card-subtitle
        >
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.agent-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
