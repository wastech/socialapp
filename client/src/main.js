import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import lazyPlugin from "vue3-lazy";
import router from "./router";
import store from "./store";

import Toaster from "@meforma/vue-toaster";

createApp(App)
  .use(store)
  .use(Toaster)
  .use(lazyPlugin, {
    loading: "loading.png",
    error: "error.png",
  })
  .use(router)
  .mount("#app");
