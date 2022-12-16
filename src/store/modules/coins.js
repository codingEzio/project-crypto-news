import * as R from 'ramda';
import * as coinsAPI from '@/api/coins';
import { prependProp } from '@/helpers/ramda';

const state = {
  coins: [],
  prices: {},
  error: null,
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
      .then(response => {
        commit('setCoins', response.data);
      })
      .catch(error => {
        commit('setError', error);
      });
  },
};

const mutations = {
  setCoins(state, { Data, BaseImageUrl, BaseLinkUrl }) {
    const requiredProps = [
      'Id',
      'Symbol',
      'CoinName',
      'FullName',
      'Url',
      'ImageUrl',
    ];

    state.coins = R.pipe(
      R.filter(R.allPass(R.map(R.has, requiredProps))),
      R.map(
        R.compose(
          R.pickAll(requiredProps),
          prependProp('Url', BaseLinkUrl),
          prependProp('ImageUrl', BaseImageUrl),
        ),
      ),
      R.values,
    )(Data);
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
