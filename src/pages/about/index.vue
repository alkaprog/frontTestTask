<script setup lang="ts">
import { CompanyDescription, CompanyLocation, CompanySchedule } from "widgets";
import type { Company } from "entities/company";

definePageMeta({
  layout: "main-layout",
});

const company = inject<Company>("company");
</script>

<template>
  <div class="flex justify-center pb-12 xl:pt-8 xl:pb-[64px]">
    <div
      v-if="company"
      class="flex flex-col gap-2 w-full xl:w-[560px] xl:gap-3"
    >
      <company-description :company="company" />
      <company-schedule :company="company" />
      <company-location :company="company" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
