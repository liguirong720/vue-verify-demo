# better-scroll使用注意点

- BScroll实例挂载节点必须设置高度，并且当挂载节点里面的内容大于设置的高度的时候才会滚动
- BScroll挂载节点需要设置overflow：hidden属性
- BScroll挂载节点的第一个子节点才会滚动，其他子节点不会滚动

## 纵向滚动例子

```html
<div class="wrapper">
    <div class="content"></div>
    <div class="other"></div>
    <div class="other"></div>
    <div class="other"></div>
    <div class="other"></div>
    <div class="other"></div>
</div>
```

```js
import BScroll from 'better-scroll';

let bs = new BScroll('.wrapper', {
    click: true
});
```

```css
.wrapper {
    height: 400px;
    width: 100%;
    overflow: hidden;
}
```

在上面的例子中，wrapper选择器为BScroll的挂载节点，实例作用的滚动节点为第一个子节点，即content容器，其他节点不会滚动。
注意挂载节点需要设置overflow属性。

## 横向滑动

> BetterScroll 实现横向滚动，对 CSS 是比较苛刻的。首先你要保证 wrapper 不换行，并且 content 的 display 是 inline-block。

```css
.scroll-wrapper
  // ...
  white-space nowrap
.scroll-content
  // ...
  display inline-block
```

## 纵向滚动里面包含横向滚动

具体例子可以参考

> src\views\BetterSlider.vue

## 实现slider 功能

> src\components\Scroll.vue

## 页面联动导航

> src\views\BetterScroll.vue
