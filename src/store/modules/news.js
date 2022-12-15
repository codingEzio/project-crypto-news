import * as newsAPI from '../../api/news';

const state = {
  news: [],
  error: null,
};

const getters = {};

const actions = {
  getLatestNews({ commit }) {
    newsAPI
      .getLatestNews()
      .then(resp => {
        commit('setNews', resp.data.Data);
      })
      .catch(err => {
        commit('setError', err);
      });
  },
};

const mutations = {
  setNews(state, data) {
    state.news = data;
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
