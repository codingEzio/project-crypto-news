import axios from 'axios';

// No API key is required for fetching the news data
// this can be directly parsed in components to use (and display)
export function getLatestNews() {
  return axios.get('https://min-api.cryptocompare.com/data/v2/news/', {
    params: {
      lang: 'EN',
      extraParams: 'crypto-news-vue',
    },
  });
}
