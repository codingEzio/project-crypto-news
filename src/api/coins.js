import axios from 'axios';

const API_PREFIX = 'https://min-api.cryptocompare.com';
const API_PARAM_EXTRA = 'crypto-news-vue';

export function getAllCoins() {
  return axios.get(API_PREFIX + '/data/all/coinlist', {
    params: {
      lang: 'EN',
      extraParams: API_PARAM_EXTRA,
    },
  });
}

export function getCoinsPrices(coins = [], currencies = ['BTC', 'USD', 'EUR']) {
  return axios.get(API_PREFIX + '/data/price/multi', {
    params: {
      fsyms: coins.join(','),
      tsyms: currencies.join(','),
      extraParams: API_PARAM_EXTRA,
    },
  });
}
