import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import GlobalHome from './components/screens/GlobalHome';
import NewsItem from './components/screens/NewsItem';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: GlobalHome },
    { path: '/news', component: NewsItem },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
