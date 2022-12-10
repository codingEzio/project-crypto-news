import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBootStrap from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import GlobalHome from './components/screens/GlobalHome';
import NewsItem from './components/screens/NewsItem';

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
  router,
  render: h => h(App),
}).$mount('#app');
