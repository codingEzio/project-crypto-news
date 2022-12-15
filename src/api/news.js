import axios from 'axios';
import API_PREFIX from '../util/constants';

// No API key is required for fetching the news data
// this can be directly parsed in components to use (and display)
export function getLatestNews() {
  return axios.get(API_PREFIX + '/data/v2/news/', {
    params: {
      lang: 'EN',
      extraParams: 'crypto-news-vue',
    },
  });
}
