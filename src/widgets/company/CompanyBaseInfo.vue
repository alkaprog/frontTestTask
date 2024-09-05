<script setup lang="ts">
import type { PropType } from "vue";
import { IconApproved, IconStar } from "shared/assets/icons";
import type { Company } from "entities/company";
import { VButton } from "shared";

const props = defineProps({
  company: {
    type: Object as PropType<Company | null>,
    default: null,
  },
});

const isPhoneShown = ref(false);

const isCompanyApproved = computed(() => props.company?.isApproved || false);
const companyRating = computed(() => props.company?.rating || 0);
const companyReviewsCount = computed(() => props.company?.reviewsCount || 0);
const companyPhone = computed(() => props.company?.phone || "");
</script>

<template>
  <div class="flex flex-col items-center pt-6 pb-8 xl:py-0">
    <div class="w-[120px] h-[120px] rounded-[20px] overflow-hidden mx-auto">
      <v-img :src="company?.logo" />
    </div>
    <h1 class="text-2xl font-semibold text-center mt-6">{{ company.name }}</h1>
    <div class="flex justify-center text-sm leading-5 mt-3 gap-1">
      <div v-if="isCompanyApproved" class="flex items-center gap-1">
        <icon-approved class="h-4 w-4" />
        <div>Проверен</div>
        <div>•</div>
      </div>
      <div class="flex items-center gap-1">
        <icon-star class="h-4 w-4"></icon-star>
        <div>{{ companyRating }}</div>
        <div>•</div>
      </div>
      <div class="flex items-center gap-1">
        <div>{{ companyReviewsCount }}</div>
        <div>отзывов</div>
      </div>
    </div>
    <div class="mt-6 hidden xl:block">
      <v-button
        v-if="!isPhoneShown"
        variant="primary"
        size="big"
        @click="isPhoneShown = true"
      >
        Показать номер телефона
      </v-button>
      <a v-else :href="`tel:${companyPhone}`">{{ companyPhone }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
