import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#app";

export default defineNuxtRouteMiddleware((to) => {
  const accessToken = useCookie("accessToken");
  if (to.path === "/" || (accessToken.value && to.path === "/login")) {
    return navigateTo("/about");
  }
});
