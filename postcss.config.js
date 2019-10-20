module.exports = {
  plugins: {
    'autoprefixer': {},
    // 'postcss-px-to-viewport': {
    //   unitToConvert: 'px',
    //   viewportWidth: 375,
    //   unitPrecision: 5,
    //   propList: ['*'],
    //   viewportUnit: 'vw',
    //   fontViewportUnit: 'vw',
    //   selectorBlackList: [],
    //   minPixelValue: 1,
    //   mediaQuery: false,
    //   replace: true,
    //   exclude: [],
    //   landscape: false,
    //   landscapeUnit: 'vw',
    //   landscapeWidth: 568
    // }
    // rem布局需要配置的
    // remUnit值是设计稿宽度的十分之一
    'postcss-px2rem': {
      remUnit: 75
    }
  }
};
