// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Store from './store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.name !== 'Auth' && !Store.getters.hasToken) {
    return next({
      path: '/',
    });
  }
  if (to.name === 'Auth' && Store.getters.hasToken) {
    return next({
      path: '/app',
    });
  }
  return next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  template: '<App/>',
  components: { App },
});
