import ToastCpn from './src/Toast';

let vm;

export const Toast = {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, duration, cb) {
      let ToastCtr = Vue.extend(ToastCpn);

      if (!vm) {
        vm = new ToastCtr({
          el: document.createElement('div')
        });
      }

      vm.text = message;
      vm.duration = duration;
      vm.show = true;

      document.body.appendChild(vm.$el);

      setTimeout(() => {
        vm.show = false;
        typeof cb === 'function' && cb();
        document.body.removeChild(vm.$el);
        vm = null;
      }, vm.duration);
    }
  }
};
