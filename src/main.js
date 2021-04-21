import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuesax from "vuesax";
import VueCookies from "vue-cookies";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import iView from "iview";
import "boxicons/css/boxicons.min.css";
import "iview/dist/styles/iview.css";
import "vuesax/dist/vuesax.css";
import "./assets/tailwind.css";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuesax);
Vue.use(VueCookies);
Vue.use(iView);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
