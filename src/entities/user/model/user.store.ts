import { defineStore } from "pinia";
import { getUser, type User } from "entities/user";

type State = {
  user: User | null;
};
export const useUserStore = defineStore("user-store", {
  state: (): State => ({ user: null }),
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    async loadUser() {
      const { data, status } = await getUser();
      if (status.value === "success" && data.value) {
        this.setUser(data.value);
      }
    },
  },
});
