export const html = {
  name: 'myHtml',
  install(Vue, options) {
    Vue.directive('myHtml', {
      bind(el, binding) {
        const htmlStr = binding.value;
        el.innerHTML = htmlStr;
      }
    });
  }
};
