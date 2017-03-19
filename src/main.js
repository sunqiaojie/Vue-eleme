import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl';

// 安装vue-router插件
Vue.use(VueRouter);
Vue.use(VueResource);
// 创建一个子类app
// let app = Vue.extend(App);

// let router = new VueRouter();
// vue 1.0语法
// router.map({
// 	'/goods': {
// component: goods
// },
// 'ratings': {
// component: ratings
// },
// '/seller': {
// component: seller
// }
// });

let router = new VueRouter({
	linkActiveClass: 'active',
  routes: [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ]
});

// router.start(app, '#myapp');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
  // template: app // '<router-view></router-view>'
});
router.push('/goods');
