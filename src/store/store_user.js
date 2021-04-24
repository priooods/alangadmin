import User from "../api/User";
import cookies from "vue-cookies";
export default {
  namespaced: true,
  state: {
    user: [],
    userall: [],
  },
  actions: {
    LoginPengguna({ commit }, data) {
      User.LoginUser(data).then((res) => {
        if (res.data.error_code == 0) {
          commit("user", res.data.data);
          cookies.set("token", res.data.data.token);
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
          console.log(res.data.data);
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
        if (res.data.error_code == 0) {
          cookies.set("next", 1);
          dispatch("Me");
          return dispatch("AllUsers");
        }
        return cookies.set("next", 0);
      });
    },
    // AddCabang({ dispatch }, form) {
    //   Mitra.addCabang(form).then((data) => {
    //     if (data.data.error_code == 0) {
    //       cookies.set("next", 1);
    //       return dispatch("AllCabang");
    //     }
    //     return cookies.set("next", 0);
    //   });
    // },
    // UpdateCabang({ commit }, form) {
    //   Mitra.updateCabang(form).then((data) => {
    //     if (data.data.error_code == 0) {
    //       cookies.set("next", 1);
    //       return commit("updatecabang", data.data.data);
    //     }
    //     return cookies.set("next", 0);
    //   });
    // },
    // DeleteCabang({ commit }, form) {
    //   Mitra.deleteCabang(form).then((data) => {
    //     if (data.data.error_code == 0) {
    //       cookies.set("next", 1);
    //       return commit("deletecabang", form);
    //     }
    //     return cookies.set("next", 0);
    //   });
    // },
  },
  mutations: {
    user(state, payload) {
      state.user = payload;
    },
    userall(state, payload) {
      state.userall = payload;
    },
    // cabangall(state, payload) {
    //   state.cabangall = payload;
    // },
    // updatecabang(state, payload) {
    //   var index = state.cabangall.findIndex((x) => x.id === payload.id);
    //   state.cabangall.splice(index, 1, payload);
    //   return this.commit("mitra/cabangall", state.cabangall);
    // },
    // deletecabang(state, payload) {
    //   var adm = state.cabangall.findIndex((e) => e.id === payload.id);
    //   return state.cabangall.splice(adm, 1);
    // },
  },
};
