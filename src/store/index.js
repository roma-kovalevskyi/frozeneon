import Vue from 'vue';
import Vuex from 'vuex';
import { loadPackages } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: [],
  },
  mutations: {
    setPackages(state, payload) {
      state.packages = payload;
    },
  },
  getters: {
    packages(state) {
      return state.packages;
    },
  },
  actions: {
    async fetchPackages({ commit }) {
      try {
        const { data } = await loadPackages();
        commit('setPackages', data);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
