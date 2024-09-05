<script setup lang="ts">
import { type Agent, getAgentList } from "entities/agent";
import AgentsList from "widgets/agents/AgentsList.vue";

definePageMeta({
  layout: "main-layout",
  middleware: ["auth"],
});

const agents = ref<Agent[]>([]);

const fetchAgents = async () => {
  const { data, status } = await getAgentList();
  if (status.value === "success" && data.value) {
    agents.value = data.value;
  }
};

await fetchAgents();
</script>

<template>
  <div class="py-8 flex justify-center">
    <agents-list v-if="agents" :agents="agents" class="w-[90%] max-w-[500px]" />
  </div>
</template>

<style scoped lang="scss"></style>
