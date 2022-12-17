import axios from 'axios';
import * as R from 'ramda';
import { camelCase } from 'change-case';
import { prependProp, recursiveMapKeys } from '@/helpers/ramda';

const API_PREFIX = 'https://min-api.cryptocompare.com';
const API_PARAM_EXTRA = 'crypto-news-vue';

export function getAllCoins() {
  return axios
    .get(API_PREFIX + '/data/all/coinlist', {
      params: {
        lang: 'EN',
        extraParams: API_PARAM_EXTRA,
      },
    })
    .then(response => {
      const baseLinkUrl = R.prop('BaseLinkUrl', response.data);
      const baseImageUrl = R.prop('BaseImageUrl', response.data);

      const requiredProps = [
        'id',
        'symbol',
        'coinName',
        'fullName',
        'url',
        'imageUrl',
      ];

      const data = R.pipe(
        recursiveMapKeys(camelCase),

        // Coins shall meet/have these props
        R.filter(R.allPass(R.map(R.has, requiredProps))),

        R.map(
          R.compose(
            R.pickAll(requiredProps),
            prependProp('url', baseLinkUrl),
            prependProp('imageUrl', baseImageUrl),
          ),
        ),

        R.values,
      )(response.data.Data);

      return {
        fetchedAt: Date.now(),
        data,
      };
    });
}

export function getCoinsPrices(coins = [], currencies = ['BTC', 'USD', 'EUR']) {
  return axios
    .get(API_PREFIX + '/data/price/multi', {
      params: {
        fsyms: coins.join(','),
        tsyms: currencies.join(','),
        extraParams: API_PARAM_EXTRA,
      },
    })
    .then(response => response.data);
}
