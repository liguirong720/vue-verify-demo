<template>
  <transition name="toast">
    <div class="t-wrap" v-if="show">
      {{text}}
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'Toast',
        data() {
            return {
                show: false,
                text: '',
                duration: 3000
            }
        }
    }
</script>

<style lang="less" scoped>
  .t-wrap{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 30%;
    max-width: 50%;
    padding: 20px;
    border-radius: 10px;
    font-size: 32px;
    background: rgba(0, 0, 0, .5);
    color: #ffffff;
    text-align: center;
    z-index: 999;
  }
  .toast-enter-active, .toast-leave-active {
    transition: all .2s;
  }
  .toast-enter, .toast-leave-to {
    opacity: 0;
  }
</style>
