import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import services from "./services";

import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/dist/index.css";

import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

const app = createApp(App);
app.config.globalProperties.$image_base = "http://localhost:8888/uploads/";
app.config.globalProperties.$services = services;
app.use(store);
app.use(router);

app.use(ElementPlus);

app.use(FloatingVue);
app.mount("#app");
