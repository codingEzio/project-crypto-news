import * as R from 'ramda';
import * as coinsAPI from '@/api/coins';

const state = {
  exchangeRates: [],
  error: null,
};

const getters = {
  getExchangeRateBySymbol: state => symbol => {
    return R.find(R.propEq('fsym', symbol))(state.exchangeRates);
  },

  generateChartData:
    state =>
    (symbol, criterium = 'high') => {
      const exchangeRate = getters.getExchangeRateBySymbol(state)(symbol);

      const labels = R.map(R.prop('time'))(exchangeRate.previous);
      const data = R.map(R.prop(criterium))(exchangeRate.previous);

      return {
        labels: labels,
        datasets: [
          {
            label: symbol,
            data: data,
          },
        ],
      };
    },
};

const actions = {
  getCoinExchangeRate({ commit }, { coin, currency = 'USD', limit = 55 }) {
    coinsAPI
      .getExchangeRateByMinute(coin, currency, limit)
      .then(response => commit('saveExchangeRate', response))
      .catch(error => commit('setError', error));
  },
};

const mutations = {
  saveExchangeRate(state, data) {
    const actualExchangeRate = R.defaultTo({
      fsym: data.fsym,
      tsym: data.tsym,
      interval: data.interval,
      current: {},
      previous: [],
    })(getters.getExchangeRateBySymbol(state)(data.fsym));

    const updatedExchangeRate = R.evolve({
      current: R.always(R.head(data.response)),
      previous: R.pipe(R.concat(data.response), R.uniq),
    })(actualExchangeRate);

    state.exchangeRates = R.pipe(
      R.concat([updatedExchangeRate]),
      R.uniqBy(R.prop('fsym')),
      R.sortBy(R.compose(R.toLower, R.prop('fsym'))),
    )(state.exchangeRates);
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
