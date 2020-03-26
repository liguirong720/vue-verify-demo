# swiper 插件的使用

## 安装
```
   yarn add swiper
```

## 使用

### main.js中引入css

```js
import 'swiper/css/swiper.min.css';
```

### vue组件中创建Swiper实例
```js
this.mySwiper = new Swiper('.swiper-container', {
  initialSlide: 0
});
```

### 监听swiper事件
```js
this.mySwiper.on('slideChange', () => {
  this.activeIndex = this.mySwiper.activeIndex;
});
```

## 高级用法

### 页面内容左右滑动时，自动切换导航栏状态
参考案例代码： src/views/SwiperTab.vue

## 官方API
[Swiper](https://swiperjs.com/api/)
