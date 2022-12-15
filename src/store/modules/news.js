import * as news from '../../api/news';

const state = {
  news: [],
  error: [],
};

const getters = {};

const actions = {
  getLatestNews({ commit }) {
    news
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
  setNews(state, news) {
    state.news = news;
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
