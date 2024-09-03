<script setup lang="ts">
import { IconCart, IconCategories, IconLogo } from "shared/assets/icons";
import { VButton } from "~/src/shared";
</script>

<template>
  <v-app-bar
    class="h-[56px] !p-2 flex justify-center xl:h-[64px] xl:!px-8"
    color="#FFF7EB"
    flat
  >
    <template #prepend>
      <v-app-bar-nav-icon class="xl:!hidden" />
    </template>
    <template #title>
      <v-app-bar-title>
        <icon-logo class="h-[32px]" />
      </v-app-bar-title>
    </template>
    <template #append>
      <v-button class="!hidden gap-1 xl:!flex">
        <template #prepend>
          <icon-categories class="h-6 w-6" />
        </template>
        Все категории
      </v-button>
      <div class="ml-9 h-10 w-10 flex justify-center items-center xl:hidden">
        <icon-cart class="shrink-0 h-6 w-6" />
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">
:deep(.v-toolbar__content) {
  @apply h-fit !important;
}
:deep(.v-toolbar__prepend) {
  @apply max-h-[40px] max-w-[40px]  m-0;

  & .v-btn {
    @apply h-full w-[40px];
  }
}

:deep(.v-toolbar-title__placeholder) {
  @apply flex justify-end xl:justify-start xl:w-fit !important;
}

:deep(.v-toolbar-title) {
  @apply m-0 xl:max-w-fit !important;
}

:deep(.v-toolbar__append) {
  @apply mr-0 xl:grow xl:ml-8 !important;
}
</style>
