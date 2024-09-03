<script setup lang="ts">
import { VFooter } from "vuetify/components";
import type { Component, PropType } from "vue";
import { IconRussianLang } from "shared/assets/icons";

defineProps({
  selectedLang: {
    type: Object as PropType<{ icon: Component; name: string }>,
    default: () => ({ icon: IconRussianLang, name: "Русский" }),
  },
  footerItems: {
    type: Array as PropType<{ url: string; name: string }[]>,
    default: () => [],
  },
});
</script>

<template>
  <v-footer
    class="!max-h-fit !grow-0 !block !bg-bg-light-grey text-sm border-t border-solid border-border xl:!flex xl:gap-[20px] xl:!px-[32px]"
    style="padding: 24px 16px 40px 16px"
  >
    <div class="font-medium mb-[20px] xl:mb-0">© Annonce 2023</div>
    <client-only>
      <ul
        class="text-dark-grey font-medium flex flex-col gap-[20px] mb-[20px] xl:flex-row xl:mb-0"
      >
        <li
          v-for="(footerItem, index) in footerItems"
          :key="`footer-item-${index}`"
        >
          <nuxt-link :to="footerItem.url">
            {{ footerItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </client-only>
    <div class="flex items-center h-8 gap-[6px] xl:hidden">
      <component
        :is="selectedLang.icon"
        class="h-4 w-4 ml-[6px] rounded-full overflow-hidden"
      />
      <div>{{ selectedLang.name }}</div>
    </div>
  </v-footer>
</template>

<style scoped lang="scss"></style>
