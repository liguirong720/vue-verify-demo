export const resize = {
  name: 'resize',
  install(Vue, options) {
    Vue.directive('resize', {
      inserted(el, binding) {
        const callback = binding.value;
        const debounce = 200;
        const option = binding.options || { passive: true };

        let debounceTimeout = null;

        const onResize = () => {
          clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(callback, debounce, option);
        };

        window.addEventListener('resize', onResize, option);

        el._onResize = {
          callback,
          options
        };

        if (!binding.modifiers || !binding.modifiers.quiet) {
          onResize()
        }
      },

      unbind(el, binding) {
        const { callback, options } = el._onResize;
        window.removeEventListener('resize', callback, options);
        delete el._onResize;
      }
    })
  }
};
