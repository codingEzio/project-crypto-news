import Vue from 'vue';
import Vuex from 'vuex';
import * as R from 'ramda';
import createLogger from 'vuex/dist/logger';
import createPersistedState from '@/store/plugins/persistent';

import news from './modules/news';
import coins from './modules/coins';
import trends from './modules/trends';

// Enable log and strict mode only in dev environment
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const plugins = [
  createPersistedState({
    strictMode: debug,
    modules: ['coins', 'news'],
  }),
];
const devPlugins = [createLogger()];
const prodPlugins = [];

export default new Vuex.Store({
  strict: debug,
  plugins: debug
    ? R.concat(plugins, devPlugins)
    : R.concat(plugins, prodPlugins),
  modules: {
    news,
    coins,
    trends,
  },
});
