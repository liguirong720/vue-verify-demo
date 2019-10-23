<template>
  <div v-if="show">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '正在加载中...'
    }
  }
};
</script>

<style scoped>

</style>
