import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import users from "./store_user";
import department from "./store_department";
import proker from "./store_proker";
Vue.use(Vuex);
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: { users, department, proker },
});

export default store;
