<template>
    <div
        class="wrapper"
        v-infinite-scroll="loadData"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
    >
        <div class="w-item" v-for="item in listData" :key="item.id">{{item.name}}</div>
        <div class="hintText" v-if="listData.length">{{hintText}}</div>
    </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll';
import { mapState } from 'vuex';

export default {
    directives: {
        infiniteScroll
    },
    computed: mapState({
       otherCount: state => state.others.count 
    }),
    data() {
        return {
            busy: false,
            listData: [],
            hintText: '',
            loopCount: 0
        }
    },
    mounted() {
        console.log(this.otherCount);
    },
    methods: {
        loadData() {
            if (this.loopCount > 30) {
                this.busy = false;
                this.hintText = '已无更多';
            } else {
                this.busy = true;
                this.hintText = '加载中...';
                setTimeout(() => {
                    for(let i = 0; i < 10; i++) {
                        this.listData.push({
                            id: this.loopCount++,
                            name: 'loop item' + this.loopCount++
                        });
                    }
                    this.busy = false;
                }, 1000);
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .wrapper{
        width: 90%;
        margin: 75px auto;

        .w-item {
            height: 150px;
            width: 100%;
            line-height: 150px;
            text-align: center;
            background-color: #eee;
            margin-top: 10px;
        }
        
        .hintText {
            margin-top: 10px;
            font-size: 16px;
            color: #333;
            text-align: center;
        }
    }
</style>
