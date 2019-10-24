export const focus = {
  name: 'focus',
  install(Vue, options) {
    Vue.directive('focus', {
      inserted(el) {
        el.focus();
      }
    });
  }
};
