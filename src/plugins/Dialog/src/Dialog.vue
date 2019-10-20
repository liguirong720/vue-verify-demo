<template>
  <transition name="dialog">
    <div v-if="show">
      <div class="d-mask" v-if="config.showMask"></div>
      <div class="d-content">
        <div class="d-title" v-if="config.showTitle">
          <h3>{{ config.title }}</h3>
        </div>
        <div class="d-message">
          <p>{{ config.message }}</p>
        </div>
        <div class="d-btn-group">
          <div class="btn" v-if="config.showLeftBtn" :class="[config.leftActive ? 'active' : '']" @click="close">{{config.leftText}}</div>
          <div class="btn" :class="[config.rightActive ? 'active' : '']" @click="confirm">{{config.rightText}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      show: false,
      config: {
        showMask: true,
        showTitle: true,
        title: '提示',
        message: '这里是提示的具体内容，可以很长很长的，不信你试试看啊',
        leftText: '取消',
        showLeftBtn: true,
        leftActive: false,
        rightText: '确定',
        showRightBtn: true,
        rightActive: true,
        leftBtnCb: null,
        rightBtnCb: null
      }
    };
  },
  methods: {
    close() {
      this.show = false;
      typeof this.config.leftBtnCb === 'function' && this.config.leftBtnCb();
    },
    confirm() {
      this.show = false;
      typeof this.config.rightBtnCb === 'function' && this.config.rightBtnCb();
    }
  }
};
</script>

<style lang="less" scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .d-mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .8);
    z-index: 9999;
  }

  .d-content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 70%;
    max-width: 70%;
    border-radius: 10px;
    font-size: 32px;
    background: #ffffff;
    text-align: center;
    z-index: 99999;
    box-sizing: border-box;

    .d-title h3{
      height: 85px;
      line-height: 85px;
    }

    .d-message{
      padding: 0 20px 20px 20px;
    }

    .d-btn-group {
      display: flex;
      border-top: 1px solid #eee;
      .btn{
        flex: 1;
        padding: 20px;
        &:nth-child(n+2) {
          border-left: 1px solid #eee;
        }
      }
      .active {
        color: rgba(218, 57, 11, 0.99);
      }
    }
  }

  .dialog-enter-active,
  .dialog-leave-active {
    transition: all 0.2s;
  }

  .dialog-enter,
  .dialog-leave-to {
    opacity: 0;
  }
</style>
