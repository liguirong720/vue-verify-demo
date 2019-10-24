export const demo = {
  install(Vue, options) {
    Vue.directive('demo', {
      // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      bind(el, binding, vnode, oldVnode) {
        // 逻辑
      },
      // 被绑定元素插入父节点时调用
      inserted(el) {},
      // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有
      update() {},
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      componentUpdated() {},
      // 只调用一次，指令与元素解绑时调用
      unbind() {}
    });
  }
};
