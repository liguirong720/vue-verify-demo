# Vue插件开发的几种方法
Vue插件应当有一个公开的install方法，这个方法的第一个参数是Vue构造器，第二个参数是一个可选对象。

- 全局方法或属性
- 全局指令
- 注入组件
- 添加实例方法
- 注册全局组件

```js
const MyPlugin = {
  install(Vue, options) {
    // 全局方法或属性
    Vue.GlobalMethod = function() {
      
    };

    // 全局指令
    Vue.directive('my-dir', {
      bind(el, binding, vonde, oldVnode) {
      }
    });

    // 注入组件
    Vue.mixin({
      created() {
      }
    });

    // 添加实例方法
    Vue.prototype.$myMehod = function(options) {

    };

    // 注册组件
    Vue.component('vpay', vpay);
  }
};

export default MyPlugin;
```





