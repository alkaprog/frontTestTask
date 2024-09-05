<script setup lang="ts">
import { CompanyBaseInfo } from "widgets";
import { type Company, getCompanyInfo } from "entities/company";
import { VHeader, VFooter, useDeviceDetector } from "shared";
import {
  defaultFooterItems,
  navMenuItems,
  routesToShowBaseInfoOnMobile,
} from "app";
import { useUserStore } from "entities/user/model/user.store";
import UserBar from "entities/user/ui/UserBar.vue";

const { isDesktop } = useDeviceDetector();
const route = useRoute();
const userStore = useUserStore();

const company = ref<Company | null>(null);
const activeNavItem = ref(
  navMenuItems.findIndex((item) => item.url === route.path),
);

const footerItems = computed(() =>
  isDesktop.value ? defaultFooterItems.slice(0, 2) : defaultFooterItems,
);
const isBaseInfoShownOnMobile = computed(() =>
  routesToShowBaseInfoOnMobile.includes(route.path),
);

const fetchCompany = async () => {
  const { data, status } = await getCompanyInfo();
  if (status.value === "success" && data.value) {
    company.value = data.value;
  }
};

const fetchUser = async () => {
  await userStore.loadUser();
};

const init = async () => {
  await Promise.all([fetchCompany(), fetchUser()]);
};
await init();
provide("company", company);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <v-header :cart-items-count="userStore.user?.countOfCartItems || 0">
      <template #user>
        <user-bar
          v-if="userStore.user"
          class="hidden xl:flex"
          :user="userStore.user"
        />
      </template>
    </v-header>
    <div class="flex flex-col items-center grow mt-[56px] xl:mt-[64px]">
      <div class="w-full flex flex-col xl:flex-col-reverse">
        <client-only>
          <nav class="py-2 border-b border-solid border-border-light xl:py-8">
            <v-slide-group v-model="activeNavItem">
              <v-slide-group-item
                v-for="(navMenuItem, index) in navMenuItems"
                :key="`nav-item-${index}`"
                v-slot="{ toggle }"
              >
                <nuxt-link
                  class="flex items-center bg-bg-grey px-3 h-10 rounded-[12px] font-medium text-sm"
                  :class="{
                    'ml-4': index === 0,
                    'mr-4': index === navMenuItems.length - 1,
                  }"
                  active-class="nav-item__active"
                  :to="navMenuItem.url"
                  @click="toggle"
                >
                  {{ navMenuItem.name }}
                </nuxt-link>
              </v-slide-group-item>
            </v-slide-group>
          </nav>
        </client-only>
        <company-base-info
          :class="{
            'hidden xl:flex': !isBaseInfoShownOnMobile,
          }"
          :company="company"
        />
      </div>
      <slot class="w-full" />
    </div>
    <v-footer :footer-items="footerItems" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.v-slide-group__content) {
  @apply gap-[11px] justify-center;
}

.nav-item__active {
  @apply border-[1px] border-solid !px-[11px];
}
</style>
