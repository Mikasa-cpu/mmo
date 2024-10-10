import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import Antd from "ant-design-vue";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(Antd);
app.mount("#app");
