import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import Vuesax from "vuesax";
import VueCookies from "vue-cookies";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "vuesax/dist/vuesax.css";
import "./assets/tailwind.css";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Antd);
Vue.use(Vuesax);
Vue.use(VueCookies);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
