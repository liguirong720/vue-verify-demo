<template>
  <div class="box">
    <div class="tab" ref="tab">
      <div v-for="(item, index) in tabs" :key="index">
        <div :class="{ active: active === index }" @click="switchTab(index)">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="cont" ref="cont">
      <div class="cont_1" ref="cont_1">内容一</div>
      <div class="cont_2" ref="cont_2">内容二</div>
      <div class="cont_3" ref="cont_3">内容三</div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: ['tab1', 'tab2', 'tab3'],
            active: 0,
            cont1: null,
            cont2: null,
            cont3: null,
            isClickTab: false
        };
    },
    methods: {
        backTop() {
            this.cont1.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        },
        switchTab(index) {
            if (index === 0) {
                this.cont1.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            } else if (index === 1) {
                this.cont2.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            } else {
                this.cont3.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        }
    },
    mounted() {
        this.cont1 = this.$refs['cont_1'];
        this.cont2 = this.$refs['cont_2'];
        this.cont3 = this.$refs['cont_3'];
        const tabH = this.$refs['tab'].offsetHeight;
        const wHeight = document.documentElement.clientHeight;
        this.$refs['cont'].addEventListener('scroll', () => {
            console.log(this.cont3.getBoundingClientRect().bottom);
            if ((this.cont3.getBoundingClientRect().top - 45 < tabH) || (this.cont3.getBoundingClientRect().bottom < wHeight + 45)) {
                this.active = 2;
                return false;
            }
            if (this.cont2.getBoundingClientRect().top - 45 < tabH) {
                this.active = 1;
                return false;
            }
            if (this.cont1.getBoundingClientRect().top - 45 < tabH) {
                this.active = 0;
            }
        });
    }
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  font-size: 28px;
  overflow-x: auto;
  height: 100vh;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  .tab {
    height: 88px;
    background: #fff;
    line-height: 88px;
    color: #666;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    .active {
      font-size: 32px;
      color: #333;
      &::after {
        display: block;
        content: "";
        width: 36px;
        height: 6px;
        margin: auto;
        margin-top: -10px;
        background: rgba(255, 51, 0, 1);
        border-radius: 3px;
      }
    }
  }
  .cont {
    height: 300px;
    flex-grow: 1;
    overflow: auto;
    .cont_1 {
      height: 400px;
      background: pink;
    }
    .cont_2 {
      height: 800px;
      background: yellow;
    }
    .cont_3 {
      height: 100%;
      background: lightgreen;
    }
  }
}
</style>
