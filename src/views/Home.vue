<template>
  <div class="content">
    <div class="c-item" v-for="item in pages" :key="item.path" @click="toDetail(item.path)">{{item.text}}</div>
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
      ]
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
    }
  }
}
</script>
<style lang="less" scoped>
  .content {
    width: 100%;
    font-size: 16px;

    .c-item{
      width: 100%;
      height: 150px;
      line-height: 150px;
      text-align: center;
      color: #fff;
      background-color: #42b983;

      &:nth-child(n+2) {
        margin-top: 20px;
      }
    }
  }
</style>
