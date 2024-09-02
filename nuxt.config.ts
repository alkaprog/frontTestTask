import { fileURLToPath, URL } from "url";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  alias: {
    app: fileURLToPath(new URL("./src/app", import.meta.url)),
    entities: fileURLToPath(new URL("./src/entities", import.meta.url)),
    pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
    widgets: fileURLToPath(new URL("./src/widgets", import.meta.url)),
    features: fileURLToPath(new URL("./src/features", import.meta.url)),
    shared: fileURLToPath(new URL("./src/shared", import.meta.url)),
  },
  dir: {
    pages: "./src/pages",
    layouts: "./src/app/layouts",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/src/shared/assets/styles/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    public: {
      yandexMapApiKey: process.env.NUXT_PUBLIC_YNDX_MAP_API_KEY,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
