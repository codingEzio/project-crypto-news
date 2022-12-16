import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as R from 'ramda';
import createPersistedState from 'vuex-persistedstate';

import news from './modules/news';
import coins from './modules/coins';
import trends from './modules/trends';

// Enable log and strict mode only in dev environment
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const allPlugins = [createPersistedState()];
const devPlugins = [createLogger()];
const prodPlugins = [];

export default new Vuex.Store({
  strict: debug,
  plugins: debug
    ? R.concat(allPlugins, devPlugins)
    : R.concat(allPlugins, prodPlugins),
  modules: {
    news,
    coins,
    trends,
  },
});
