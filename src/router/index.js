import Vue from 'vue';
import VueRouter from 'vue-router';

import GlobalHome from '@/screens/GlobalHome';
import NewsItem from '@/screens/NewsItem';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/home', component: GlobalHome, alias: '/' },
    { path: '/news', component: NewsItem },
  ],
});

export default router;
