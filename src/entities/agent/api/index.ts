import { useRequest } from "shared";
import type { Agent } from "entities/agent";

export const getAgentList = () => {
  return useRequest<Agent[]>("/api/agents", {}, true);
};
