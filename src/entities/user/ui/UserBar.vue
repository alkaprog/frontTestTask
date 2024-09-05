<script setup lang="ts">
import type { PropType } from "vue";
import type { User } from "entities/user";
import { IconLocation } from "shared/assets/icons";

defineProps({
  user: {
    type: Object as PropType<User>,
    default: null,
  },
});
</script>

<template>
  <div class="max-h-[48px]">
    <div class="flex items-center gap-1 text-sm mr-[30px]">
      <icon-location class="h-4 w-4" />
      {{ user?.city }}
    </div>
    <v-divider vertical class="mr-[36px]" />
    <div class="flex items-center mr-[36px] text-sm font-medium text-accent">
      Разместить объявление
    </div>
    <div class="pl-3 pr-1 py-1 rounded-3xl bg-bg-grey flex gap-2 items-center">
      <v-app-bar-nav-icon class="!h-6 !w-6" />
      <v-avatar class="rounded-full" :image="user?.photo" size="40" />
    </div>
  </div>
</template>
