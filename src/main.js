import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'amfe-flexible'
import VueLazyload from 'vue-lazyload';
import { Toast } from './plugins/Toast';
import Dialog from './plugins/Dialog';
import { text } from './directives/text';
import { html } from './directives/html';
import { resize } from './directives/resize';
import { focus } from './directives/focus';

Vue.use(VueLazyload, {
  preLoad: 1.3
});

Vue.use(Toast);
Vue.use(Dialog);
Vue.use(text);
Vue.use(html);
Vue.use(resize);
Vue.use(focus);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
