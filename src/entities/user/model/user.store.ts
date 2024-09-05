import { defineStore } from "pinia";
import { useCookie } from "#app";
import { getUser, login, type User } from "entities/user";

type State = {
  user: User | null;
};
export const useUserStore = defineStore("user-store", {
  state: (): State => ({ user: null }),
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    async login(userLogin: string, password: string) {
      const { data, status } = await login(userLogin, password);

      if (status.value === "success" && data.value) {
        const accessToken = useCookie("accessToken");
        const refreshToken = useCookie("refreshToken");
        accessToken.value = data.value.access_token;
        refreshToken.value = data.value.access_token;
        await this.loadUser();
      }
    },
    async loadUser() {
      const { data, status } = await getUser();
      if (status.value === "success" && data.value) {
        this.setUser(data.value);
      }
    },
  },
});
