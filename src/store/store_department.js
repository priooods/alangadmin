import Department from "../api/Department";
export default {
  namespaced: true,
  state: {
    departmentall: [],
  },
  actions: {
    DepartmentAll({ commit }) {
      Department.DepartmentAll().then((res) => {
        if (res.data.error_code == 0) {
          return commit("department", res.data.data);
        }
        return false;
      });
    },
  },
  mutations: {
    department(state, payload) {
      state.departmentall = payload;
    },
  },
};
