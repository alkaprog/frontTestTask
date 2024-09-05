<script setup lang="ts">
import { goodFilterOptions } from "entities/good";

const appliedFilter = defineModel<number>();
const isDialogVisible = defineModel<boolean>("visible");

const selectedFilter = ref(appliedFilter.value);

const onSave = () => {
  appliedFilter.value = selectedFilter.value;
  isDialogVisible.value = false;
};
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="isDialogVisible = false" />

        <v-toolbar-title>Товары и услуги</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text="Save" variant="text" @click="onSave" />
        </v-toolbar-items>
      </v-toolbar>

      <v-list lines="two" subheader>
        <template
          v-for="(option, index) in goodFilterOptions"
          :key="`option-${index}`"
        >
          <div>
            <div v-if="option.props">
              <v-list-subheader>{{ option.props.header }}</v-list-subheader>
              <v-divider></v-divider>
            </div>
            <v-checkbox
              v-else
              v-model="selectedFilter"
              :label="option.title"
              :value="option.value"
            ></v-checkbox>
          </div>
        </template>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
