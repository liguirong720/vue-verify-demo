import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'amfe-flexible'
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
import { Toast } from './plugins/Toast';
import Dialog from './plugins/Dialog';
import { text } from './directives/text';
import { html } from './directives/html';
import { resize } from './directives/resize';
import { focus } from './directives/focus';
import 'swiper/css/swiper.min.css';

Vue.prototype.$http = axios;

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

// router.beforeEach((to, from, next) => {
//     if (to.meta.authorization) {
//         const token = localStorage.getItem('token');
//         const tokenExpiresTime = localStorage.getItem('token_expires_time');
//         const nowTime = new Date().getTime();
//         if (token && nowTime - tokenExpiresTime <= 1000 * 60 * 60) {
//             next();
//         } else {
//             next('/');
//         }
//     } else {
//         next();
//     }
// });
//
// axios.interceptors.request.use(config => {
//     // const token = localStorage.getItem('token');
//     config.headers.common['Authorization'] = 'Bearer ' + 'token';
//     return config;
// });
//
// axios.interceptors.response.use(res => {
//     return res.data;
// }, err => {
//     return Promise.reject(err);
// });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
