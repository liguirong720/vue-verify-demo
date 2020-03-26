<template>
  <div class="content" v-resize="getResize">
        <input type="file" name="file" @change="handleToUpload($event)" multiple>
<!--        <div v-my-text="myText"></div>-->
<!--        <div v-my-html="myHtml"></div>-->
    <div
      class="c-item"
      v-for="item in pages"
      :key="item.path"
      @click="toDetail(item.path)"
    >{{ item.text }}</div>
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
    // this.$toast('请求网络失败！请再次点击刷新页面！', 3000, () => {
    //   console.log('hello world');
    // });
    // this.login();
        // this.register();
        this.forget();
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
        },
        register() {
            let opts = {
                name: 'xuwenshan',
                password: '123456',
                role: 'admin',
                email: 'xuwenshan@163.com'
            };
            this.$http.post('/api/user/register', opts).then(res => {
                console.log(res);
            });
        },
        login() {
            let opts = {
                name: 'xuwenshan',
                password: '123456'
            };
            this.$http.post('/api/user/login', opts).then(res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('token_expires_time', new Date().getTime());
                console.log(res);
            });
        },
        forget() {
            let opts = {
                name: 'ligr23',
                emial: '1234@163.com',
                newPassword: '000000'
            };
            this.$http.post('/api/user/forgetPassword', opts).then(res => {
                console.log(res);
            });
        },
        handleToUpload(e) {
            let params = new FormData();
            console.log(e.target.files);
            params.append('file', e.target.files[0]);
            let config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };
            this.$http.post('/api/tools/upload', params, config).then(res => {
                console.log(res);
            });
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
