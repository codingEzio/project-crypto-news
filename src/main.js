import Vue from 'vue';
import VueBootStrap from 'bootstrap-vue';
import aos from 'aos';
import registerServiceWorker from '@/workers/registerServiceWorker';

import './styles/_index.scss';

import App from './App.vue';
import store from '@/store';
import router from '@/router';

Vue.use(VueBootStrap);

Vue.config.productionTip = false;
Vue.config.devtools = true;

registerServiceWorker();

new Vue({
  created() {
    aos.init();
  },

  store,
  router,
  render: h => h(App),
}).$mount('#app');
