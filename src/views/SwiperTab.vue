<template>
  <div class="content">
    <header class="hd">
      <ul class="hd-list">
        <li class="hd-list-item" v-for="(item, index) in navList" :key="index" :class="[activeIndex === index ? 'activeTab' : '']" @click="tabChange(item.path, index)">{{item.title}}</li>
      </ul>
    </header>
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in navList" :key="index">
            <keep-alive>
              <component :is="item.path" />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import SwiperTab1 from '../components/SwiperTab1';
import SwiperTab2 from '../components/SwiperTab2';
import SwiperTab3 from '../components/SwiperTab3';
import SwiperTab4 from '../components/SwiperTab4';
export default {
    name: 'SwiperTab',
    components: {
        SwiperTab1,
        SwiperTab2,
        SwiperTab3,
        SwiperTab4
    },
    data() {
      return {
        navList: [
          {
            title: '页面一',
            path: SwiperTab1
          },
          {
            title: '页面二',
            path: SwiperTab2
          },
          {
            title: '页面三',
            path: SwiperTab3
          },
          {
            title: '页面四',
            path: SwiperTab4
          }
        ],
        activeIndex: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.initialSwiper();
      });
    },
    methods: {
      initialSwiper() {
        this.mySwiper = new Swiper('.swiper-container', {
          initialSlide: 0
        });
        this.mySwiper.on('slideChange', () => {
          this.activeIndex = this.mySwiper.activeIndex;
        });
      },
      tabChange(path, index) {
        this.activeIndex = index;
        this.mySwiper.slideTo(index, 0, false);
      }
    }
}
</script>

<style lang="less" scoped>
  .hd{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 92px;
    background-color: #f4f5f5;
    overflow: hidden;

    .hd-list {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 92px;

      .hd-list-item {
        display: inline-block;
        width: 25%;
        height: 92px;
        line-height: 92px;
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 32px;
        transition: all .5s;
      }

      .activeTab {
        background-color: #999;
      }
    }
  }
  .swiper-box{
    margin-top: 92px;
  }
</style>
