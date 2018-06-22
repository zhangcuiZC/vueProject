import DataService from "@/services/content/data";

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    saveData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async getList({ commit, state }, { payload }) {
      const { data } = await DataService.getDataList(payload);
      commit("saveData", data);
    }
  }
};
