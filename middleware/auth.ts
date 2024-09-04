import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#app";

export default defineNuxtRouteMiddleware(() => {
  const token = useCookie("accessToken");
  if (!token.value) {
    return navigateTo("/login");
  }
});
