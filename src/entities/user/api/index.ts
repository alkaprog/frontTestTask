import { useCustomFetch } from "shared/model/composables/useCustomTest";
import { useRequest } from "shared/model/composables/useRequest";
import type { User, UserAuthTokens } from "entities/user";

export const login = (login: string, password: string) => {
  return useRequest<UserAuthTokens>("/api/login", {
    method: "POST",
    body: {
      login,
      password,
    },
  });
};

export const refreshUserToken = (token: string) => {
  return useRequest<UserAuthTokens>("/api/refresh", {
    method: "POST",
    body: {
      token,
    },
  });
};
export const getUser = () => {
  return useRequest<User>("/api/user", {}, true);
};
