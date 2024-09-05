import { useRequest } from "~/src/shared";

export function login(login: string, password: string) {
  return useRequest<{
    access_token: string;
    refresh_token: string;
  }>("/api/login", {
    method: "POST",
    body: {
      login,
      password,
    },
  });
}
