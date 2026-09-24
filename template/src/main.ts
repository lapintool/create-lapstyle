import { createApp } from "vue";
import { LapstyleVue } from "lapstyle/vue";
import "lapstyle/index.css";
import App from "./App.vue";
import router from "./router";
import "./app.css";

const app = createApp(App);
app.use(LapstyleVue);
app.use(router);
app.mount("#app");
