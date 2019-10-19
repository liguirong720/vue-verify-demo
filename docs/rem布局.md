# rem布局

rem 布局主要借助下面两个插件来实现

## amfe-flexible

安装插件

> yarn add amfe-flexible -S

在main.js中引入插件

> import 'amfe-flexible'

在index.html中删除viewport属性

## postcss-px2rem

安装插件

> yarn add postcss-px2rem -D

postcss.config.js配置,设置基准数值

```js
 module.exports = {
  plugins: {
    'postcss-px2rem': {
      remUnit: 75
    }
  }
}
```
