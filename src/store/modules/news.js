import * as newsAPI from '../../api/news';
import * as R from 'ramda';

const state = {
  news: [],
  error: null,
};

const getters = {};

const actions = {
  getLatestNews({ commit }) {
    newsAPI
      .getLatestNews()
      .then(data => commit('setNews', data))
      .catch(error => commit('setError', error));
  },
};

const mutations = {
  setNews(state, data) {
    state.news = R.prop('data', data);
  },

  setError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
