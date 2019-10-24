<template>
  <div class="content" v-resize="getResize">
    <input type="text" v-focus>
    <div v-my-text="myText"></div>
    <div v-my-html="myHtml"></div>
    <div
      class="c-item"
      v-for="item in pages"
      :key="item.path"
      @click="toDetail(item.path)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      pages: [
        {
          path: '/BetterScorll',
          text: 'BetterScroll'
        },
        {
          path: '/BetterSlider',
          text: 'BetterSlider'
        },
        {
          path: '/InfiniteSroll',
          text: 'InfiniteScroll'
        },
        {
          path: '/VueLazyload',
          text: 'VueLazyload'
        }
      ],
      myText: '这是一个文本',
      myHtml: '<div><span>这是一段HTML</span></div>'
    };
  },
  mounted() {
    this.$toast('请求网络失败！请再次点击刷新页面！', 3000, () => {
      console.log('hello world');
    });
  },
  methods: {
    toDetail(path) {
      // this.$dialog({
      //   title: 'hello world',
      //   rightBtnCb: () => {
      //     this.$toast('请求网络失败！请再次点击刷新页面！', 3000);
      //   }
      // });
      this.$router.push({ path });
    },
    getResize() {
      console.log(window.innerWidth, window.innerHeight);
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  font-size: 16px;

  .c-item {
    width: 100%;
    height: 150px;
    line-height: 150px;
    text-align: center;
    color: #fff;
    background-color: #42b983;

    &:nth-child(n + 2) {
      margin-top: 20px;
    }
  }
}
</style>
