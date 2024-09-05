<script setup lang="ts">
// import { login } from "shared/model/utils/auth-utils";

import { useRequest } from "shared";

const router = useRouter();

const userLogin = ref("");
const userPassword = ref("");
const error = ref("");

// по неведомой причине импорт этой функции из файла кидает ошибку, поэтому так
const login = (login: string, password: string) => {
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
};

const submit = async () => {
  const { data, status } = await login(userLogin.value, userPassword.value);
  if (status.value === "success") {
    error.value = "";
    const accessToken = useCookie("accessToken");
    const refreshToken = useCookie("refreshToken");

    accessToken.value = data.value?.access_token;
    refreshToken.value = data.value?.access_token;

    await router.push("/agents");
  } else {
    error.value = "Что-то пошло не так. Проверьте данные";
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <v-form
      class="w-full max-w-[300px]"
      validate-on="submit lazy"
      @submit.prevent="submit"
    >
      <v-text-field v-model="userLogin" label="Login"> </v-text-field>
      <v-text-field
        v-model="userPassword"
        label="Password"
        :error-messages="error"
      ></v-text-field>
      <v-btn class="mt-2" text="Войти" type="submit" block></v-btn>
    </v-form>
  </div>
</template>

<style scoped lang="scss"></style>
