import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/components/Auth';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Auth',
      component: Auth,
    },
    { path: '*', redirect: '/home' },
  ],
});
