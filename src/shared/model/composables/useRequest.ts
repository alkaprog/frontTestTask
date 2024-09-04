import { useCookie, type UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useRequest<T>(
  url: string | (() => string),
  _options: UseFetchOptions<T> = {},
  auth: boolean = false,
) {
  const tokensRefreshUrl = "/api/refresh";
  const access_token = useCookie("accessToken");
  const refresh_token = useCookie("refreshToken");

  const defaults: UseFetchOptions<T> = {
    retryStatusCodes: [401],
    retry: 1,
    onRequest({ options }): void {
      const baseHeaders = { ...options.headers, accept: "application/json" };

      options.headers = auth
        ? { ...baseHeaders, authorization: `Bearer ${access_token.value}` }
        : baseHeaders;
    },
    async onResponseError({ response }) {
      if (response.status === 401 && refresh_token.value) {
        await $fetch(tokensRefreshUrl, {
          method: "POST",
          body: {
            token: refresh_token.value,
          },
        })
          .then((response) => {
            access_token.value = response.access_token;
            refresh_token.value = response.refresh_token;
            return response;
          })
          .catch((error) => {
            console.log(error, "ErrorRefreshToken");
            return error;
          });
      }
    },
  };
  const params = defu(_options, defaults);
  return useFetch(url, params);
}
