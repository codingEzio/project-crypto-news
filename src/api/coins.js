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
