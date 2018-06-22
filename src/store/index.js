import Vue from "vue";
import Vuex from "vuex";
import about from "./modules/user/about";
import glance from "./modules/content/data/glance";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    about,
    glance
  },
  strict: debug
});
