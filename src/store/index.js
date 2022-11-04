import { createStore } from "vuex";

export default createStore({
  state: {
    page_settings: {
      theme: "light",
      container: "container",
    },
  },
  getters: {
    getSettings(state) {
      if (JSON.parse(localStorage.getItem("page-settings")) != null) {
        state.page_settings = JSON.parse(localStorage.getItem("page-settings"));
      }

      return state.page_settings;
    },
  },
  mutations: {
    setSettings(state, { key: key, val: val }) {
      console.log(state, key, val);
      state.page_settings[key] = val;
      localStorage.setItem("page-settings", JSON.stringify(state.page_settings));
    },
  },
  actions: {},
  modules: {},
});
