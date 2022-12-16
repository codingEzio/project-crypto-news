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
  setNews(state, response) {
    state.news = R.pipe(
      R.concat(R.prop('data', response)),
      R.uniqBy(R.prop('id')), // ensure the news were unique
    )(state.news);

    state.fetchedAt = R.prop('fetchedAt', response);
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
