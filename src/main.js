import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBootStrap from 'bootstrap-vue';
import aos from 'aos';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'aos/dist/aos.css';

import App from './App.vue';
import GlobalHome from './components/screens/GlobalHome';
import NewsItem from './components/screens/NewsItem';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueBootStrap);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/home', component: GlobalHome, alias: '/' },
    { path: '/news', component: NewsItem },
  ],
});

new Vue({
  created() {
    aos.init();
  },

  store,
  router,
  render: h => h(App),
}).$mount('#app');
