import { useRequest } from "shared/model/composables/useRequest";
import type { User } from "entities/user";

export const getUser = () => {
  return useRequest<User>("/api/user", {}, true);
};
