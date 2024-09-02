// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "@/src/shared/assets/styles/vuetify.scss";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
