import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'amfe-flexible'
import VueLazyload from 'vue-lazyload';
import Toast from './plugins/Toast';
import Dialog from './plugins/Dialog';

Vue.use(VueLazyload, {
  preLoad: 1.3
});

Vue.use(Toast);
Vue.use(Dialog);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
