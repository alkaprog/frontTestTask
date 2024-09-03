<script setup lang="ts">
import type { PropType } from "vue";
import type { Agent } from "entities/agent";
import { AgentCard } from "entities/agent";

defineProps({
  agents: {
    type: Array as PropType<Agent[]>,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <agent-card v-for="agent in agents" :key="agent.id" :agent="agent" />
  </div>
</template>

<style scoped lang="scss"></style>
