import axios from 'axios';

const API_PREFIX = 'https://min-api.cryptocompare.com';
const API_PARAM_EXTRA = 'crypto-news-vue';

export const INTERVAL_DAY = 60 * 60 * 24;
export const INTERVAL_HOUR = 60 * 24;
export const INTERVAL_MINUTE = 60;

export function getExchangeRateLink(period = INTERVAL_DAY) {
  switch (period) {
    case INTERVAL_HOUR:
      return API_PREFIX + '/data/histohour';
    case INTERVAL_DAY:
      return API_PREFIX + '/data/histoday';
    default:
      return API_PREFIX + '/data/histominute';
  }
}

export function getExchangeRateUtil(period, fsym, tsym = 'USD', limit = 55) {
  const apiLink = getExchangeRateLink(period);

  return axios
    .get(apiLink, {
      params: {
        extraParams: API_PARAM_EXTRA,
        fsym,
        tsym,
        limit,
      },
    })
    .then(response => ({
      interval: period,
      response: response.data.Data,
      timestamp: response.data.TimeTo,
      fsym,
      tsym,
    }));
}

export function getExchangeRateByDay(fsym, tsym = 'USD', limit = 55) {
  return getExchangeRateUtil(INTERVAL_DAY, fsym, tsym, limit);
}

export function getExchangeRateByHour(fsym, tsym = 'USD', limit = 55) {
  return getExchangeRateUtil(INTERVAL_HOUR, fsym, tsym, limit);
}

export function getExchangeRateByMinute(fsym, tsym = 'USD', limit = 55) {
  return getExchangeRateUtil(INTERVAL_MINUTE, fsym, tsym, limit);
}
