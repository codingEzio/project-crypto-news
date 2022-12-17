import axios from 'axios';
import * as R from 'ramda';
import { camelCase } from 'change-case';
import { recursiveMapKeys } from '@/helpers/ramda';

const API_PREFIX = 'https://min-api.cryptocompare.com';
const API_PARAM_EXTRA = 'crypto-news-vue';

// No API key is required for fetching the news data
// this can be directly parsed in components to use (and display)
export function getLatestNews() {
  return axios
    .get(API_PREFIX + '/data/v2/news/', {
      params: {
        lang: 'EN',
        extraParams: API_PARAM_EXTRA,
      },
    })
    .then(response => {
      R.pipe(
        // camelCase-ize all the keys in the response body
        //  Now the returned attributes like 'source_info' can
        //  be used as 'sourceInfo' for the uniformity
        recursiveMapKeys(camelCase),

        // Remove certain props in the response body
        R.omit(['message', 'prompted', 'type']),

        // Create and attach a new prop for future props
        R.assoc('fetchedAt', Date.now()),

        // Remove certain props from returned JSON response
        //  Filter by 'curl LINK | jq ".Data[0]"' to debug yourself
        R.evolve({
          data: R.pipe(
            R.map(
              R.omit([
                'upvotes',
                'downvotes',
                'lang',
                'tags',
                'guid',
                'source',
                'categories',
              ]),
            ),
            R.values,
          ),
        }),
      )(response.data);
    });
}
