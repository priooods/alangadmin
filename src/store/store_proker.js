import Proker from "../api/Proker";
export default {
  namespaced: true,
  state: {
    prokerall: [],
  },
  actions: {
    ProkerAll({ commit }) {
      Proker.ProkerAll().then((res) => {
        if (res.data.error_code == 0) {
          return commit("proker", res.data.data);
        }
        return false;
      });
    },
    AddProker({ dispatch }, form) {
      Proker.AddProker(form).then((data) => {
        if (data.data.error_code == 0) {
          return dispatch("ProkerAll");
        }
      });
    },
  },
  mutations: {
    proker(state, payload) {
      state.prokerall = payload;
    },
  },
};
