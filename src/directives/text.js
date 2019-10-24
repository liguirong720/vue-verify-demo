export const text = {
  name: 'myText',
  install(Vue, options) {
    Vue.directive('myText', {
      bind(el, binding) {
        const textStr = binding.value;
        el.textContent = textStr;
      }
    });
  }
};
