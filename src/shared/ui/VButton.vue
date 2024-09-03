<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  variant: {
    type: String as PropType<"primary" | "secondary">,
    default: "secondary",
  },
  size: {
    type: String as PropType<"default" | "big">,
    default: "default",
  },
});
</script>

<template>
  <v-btn
    variant="tonal"
    :class="[
      '!tracking-normal !normal-case !text-sm !font-sans hover:opacity-70',
      {
        '!rounded-[40px] !h-[48px] px-4': size === 'default',
        '!rounded-xl !h-[56px] !px-[20px]': size === 'big',
        '!bg-bg-grey hover:!bg-bg-grey': variant === 'secondary',
        '!bg-accent !text-bg-light-grey': variant === 'primary',
      },
    ]"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
    <slot />
  </v-btn>
</template>

<style scoped lang="scss">
:deep(.v-btn__prepend) {
  @apply m-0 !important;
}
:deep(.v-btn__overlay) {
  @apply hidden;
}
</style>
