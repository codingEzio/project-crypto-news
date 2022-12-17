import * as R from 'ramda';
import * as coinsAPI from '@/api/coins';

const state = {
  coins: [],
  prices: {},
  error: null,
  fetchedAt: 0,
};

const getters = {
  getCoinBySymbol: state => symbol => {
    return R.pipe(
      // x
      R.filter(R.propEq('Symbol', symbol)),
      // x
      R.head,
    )(state.coins);
  },
};

const actions = {
  getAllCoins({ commit }) {
    coinsAPI
      .getAllCoins()
      .then(data => commit('setCoins', data))
      .catch(error => commit('setError', error));
  },

  getCoinsPrices({ commit }, { coins, currencies }) {
    coinsAPI
      .getCoinsPrices(coins, currencies)
      .then(data => commit('savePrices', data))
      .catch(error => commit('setError', error));
  },
};

const mutations = {
  setCoins(state, response) {
    state.coins = R.pipe(
      R.concat(R.prop('data', response)),
      R.uniqBy(R.prop('id')),
    )(state.coins);

    state.fetchedAt = R.prop('fetchedAt', response);
  },

  savePrices(state, response) {
    state.prices = R.merge(state.prices, response);
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
