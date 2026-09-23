import { createApp } from "vue";
import { enhance } from "lapstyle";
import "lapstyle/index.css";
import App from "./App.vue";
import router from "./router";
import "./app.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
enhance(document);
