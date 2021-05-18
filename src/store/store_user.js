import User from "../api/user";
import cookies from "vue-cookies";
export default {
  namespaced: true,
  state: {
    user: [],
    newuser: [],
    userall: [],
  },
  actions: {
    LoginPengguna({ commit }, data) {
      User.LoginUser(data).then((res) => {
        if (res.data.error_code == 0) {
          commit("user", res.data.data);
          cookies.set("token", res.data.token);
          cookies.set("next", 1);
          return true;
        }
        cookies.set("next", 0);
        return false;
      });
    },
    AllUsers({ commit }) {
      User.SemuaUser().then((res) => {
        if (res.data.error_code == 0) {
          return commit("userall", res.data.data);
        }
        return false;
      });
    },
    UpdateUser({ dispatch }, data) {
      User.UpdateUser(data).then((res) => {
        if (res.data.error_code == 0) {
          cookies.set("next", 1);
          dispatch("Me");
          return dispatch("AllUsers");
        }
        return cookies.set("next", 0);
      });
    },
    Me({ commit }) {
      User.MeUser(cookies.get("token")).then((data) => {
        return commit("user", data.data.data);
      });
    },
    UpdateDetail({ dispatch }, data) {
      User.UpdateDetail(data).then((res) => {
        console.log(res.data);
        if (res.data.error_code == 0) {
          cookies.set("next", 1);
          dispatch("Me");
          return dispatch("AllUsers");
        }
        return cookies.set("next", 0);
      });
    },
    AddUsers({ commit }, form) {
      User.Register(form).then((data) => {
        console.log(data.data.data);
        if (data.data.error_code == 0) {
          cookies.set("next", 1);
          return commit("newuser", data.data.data);
        }
        return cookies.set("next", 0);
      });
    },
    AddDetail({ commit }, form) {
      User.AddDetail(form).then((data) => {
        console.log(data.data.data);
        if (data.data.error_code == 0) {
          cookies.set("next", 1);
          return commit("newuser", data.data.data);
        }
        return cookies.set("next", 0);
      });
    },
  },
  mutations: {
    user(state, payload) {
      state.user = payload;
    },
    userall(state, payload) {
      state.userall = payload;
    },
    newuser(state, payload) {
      state.newuser = payload;
    },
  },
};
