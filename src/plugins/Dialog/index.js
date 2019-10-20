import DialogCpn from './src/Dialog';

let vm;
let Dialog = {};

Dialog.install = function (Vue, options) {
  Vue.prototype.$dialog = function (config) {
    let DialogCtr = Vue.extend(DialogCpn);

    if (!vm) {
      vm = new DialogCtr({
        el: document.createElement('div')
      });
    }

    document.body.appendChild(vm.$el);

    vm.show = true;
    vm.config = Object.assign(vm.config, config);
  }
};

export default Dialog;
