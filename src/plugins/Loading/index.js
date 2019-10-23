import LoadingCpn from './src/Loading';

let $vm;

export const Loading = {
  install(Vue, options) {
    const LoadingCtr = Vue.extend(LoadingCpn);

    if (!$vm) {
      $vm = new LoadingCtr({
        el: document.createElement('div')
      });
    }

    $vm.show = false;

    let loading = {
      show(text) {
        $vm.show = true;
        $vm.text = text;
        document.body.appendChild($vm.$el);
      },
      hide() {
        $vm.show = false;
      }
    };

    if (!Vue.$loading) {
      Vue.$loading = loading;
    }

    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    });
  }
};
