// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

/* eslint-disable no-new */
global.vue = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
