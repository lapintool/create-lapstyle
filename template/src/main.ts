import { createApp } from "vue";
import { LapstyleVue } from "lapstyle/vue";
import { enhance } from "lapstyle";
import "lapstyle/index.css";
import App from "./App.vue";
import router from "./router";
import "./app.css";

const app = createApp(App);
app.use(LapstyleVue);
app.use(router);
app.mount("#app");

// Shell chrome still uses class markup (.ls-menu / .ls-btn-dropdown).
// Page content should prefer <ls-*> tags (enhance runs inside each component).
enhance(document);
