import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
  },
  getters: {
    hasToken: state => !!state.token,
    getToken: state => state.token,
  },
});
