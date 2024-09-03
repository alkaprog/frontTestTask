<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const model = defineModel();
</script>

<template>
  <v-select v-model="model" :items="items">
    <template #item="data">
      <v-list-subheader v-if="data.props.header">
        {{ data.props.header }}
      </v-list-subheader>
      <v-divider v-else-if="data.props.divider" />
      <v-list-item v-else v-bind="data.props"> </v-list-item>
    </template>
  </v-select>
</template>

<style scoped lang="scss"></style>
