import { createApp } from "vue";
import { enhance } from "lapstyle";
import "lapstyle/index.css";
import App from "./App.vue";

createApp(App).mount("#app");
enhance(document);
