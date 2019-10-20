# vue-lazyload插件

图片懒加载插件

## 基础使用

在main.js中全局引入该插件后，即可在组件中使用

```js
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
});
```

在组件中调用

```html
<div class="v-item" v-for="(item, index) in imgLists" :key="index">
    <img v-lazy="item.picurl">
</div>
```

## 高级用法
