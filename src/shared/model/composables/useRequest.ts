import { useCookie, useFetch, type UseFetchOptions } from "nuxt/app";
import { type DataType } from "shared";

export const useRequest = <T>(
  url: (() => string) | string,
  options?: UseFetchOptions<DataType<T>>,
  auth: boolean = false,
) => {
  const token = useCookie("accessToken");

  const result = useFetch(url, {
    ...options,
    onRequest({ options }): void {
      const baseHeaders = { ...options.headers, accept: "application/json" };

      options.headers = auth
        ? { ...baseHeaders, authorization: `Bearer ${token.value}` }
        : baseHeaders;
    },
    onResponse({ response, options }): void {
      if (response?.status === 401) {
        try {
          const newToken = "123";
          token.value = newToken;

          options.headers = { Authorization: `Bearer ${newToken}` };
          useFetch(url, options as UseFetchOptions<T>);
        } catch (error) {
          token.value = null;
        }
      }
    },
  });

  return result;
};
