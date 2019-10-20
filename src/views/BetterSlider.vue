<template>
    <div v-if="recommends.length" class="slider-wrapper">
        <slider >
            <div v-for="(item, index) in recommends" :key="index">
                <a>
                    <img class="needsclick" :src="item.picurl" alt="">
                </a>
            </div>
        </slider>
        <scroll
            class="s-v-wrap"
            :ref="vRefs"
            :scrollX="false"
            :scrollY="true"
        >
            <div class="s-v-item">
                <scroll
                    class="scroll-wrap"
                    :refs="refs1"
                    :scrollX="scrollX"
                    :scrollY="scrollY"
                    :listData="recommends"
                >
                    <div class="scroll-item">
                        <a v-for="(item, index) in recommends" :key="index">
                            <img :src="item.picurl">
                        </a>
                    </div>
                </scroll>
                <scroll
                    class="scroll-wrap"
                    :refs="refs2"
                    :scrollX="scrollX"
                    :scrollY="scrollY"
                    :listData="recommends"
                >
                    <div class="scroll-item">
                        <a v-for="(item, index) in recommends" :key="index">
                            <img :src="item.picurl">
                        </a>
                    </div>
                </scroll>
                <scroll
                    class="scroll-wrap"
                    :refs="refs3"
                    :scrollX="scrollX"
                    :scrollY="scrollY"
                    :listData="recommends"
                >
                    <div class="scroll-item">
                        <a v-for="(item, index) in recommends" :key="index">
                            <img :src="item.picurl">
                        </a>
                    </div>
                </scroll>
                <scroll
                    class="scroll-wrap"
                    :refs="refs4"
                    :scrollX="scrollX"
                    :scrollY="scrollY"
                    :listData="recommends"
                >
                    <div class="scroll-item">
                        <a v-for="(item, index) in recommends" :key="index">
                            <img :src="item.picurl">
                        </a>
                    </div>
                </scroll>
                <scroll
                    class="scroll-wrap"
                    :refs="refs5"
                    :scrollX="scrollX"
                    :scrollY="scrollY"
                    :listData="recommends"
                >
                    <div class="scroll-item">
                        <a v-for="(item, index) in recommends" :key="index">
                            <img :src="item.picurl">
                        </a>
                    </div>
                </scroll>
            </div>
        </scroll>
    </div>
</template>
<script>
import Slider from '../components/Slider';
import Scroll from '../components/Scroll';

export default {
    data() {
        return {
            recommends: [
                { 'picurl': 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002QA9kw0QwiVQ.jpg' },
                { 'picurl': 'http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg' },
                { 'picurl': 'http://b-ssl.duitang.com/uploads/item/201604/23/20160423185321_K2ueY.jpeg' },
                { 'picurl': 'http://pic21.nipic.com/20120426/9940080_164340613124_2.jpg' },
                { 'picurl': 'http://pic35.nipic.com/20131115/7002646_153323018000_2.jpg' },
                { 'picurl': 'http://pic38.nipic.com/20140228/7815256_142332883000_2.jpg' },
                { 'picurl': 'http://img1.imgtn.bdimg.com/it/u=1366904711,2699461808&fm=214&gp=0.jpg' }
            ],
            scrollX: true,
            scrollY: false,
            refs1: 'h-scroll1',
            refs2: 'h-scroll2',
            refs3: 'h-scroll3',
            refs4: 'h-scroll4',
            refs5: 'h-scroll5',
            refs6: 'h-scroll6',
            vRefs: 'v-scroll'
        };
    },
    components: {
        Slider,
        Scroll
    }
}
</script>
<style lang="less" scoped>
    .scroll-wrap {
        margin-top: 30px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        
        .scroll-item {
            display: inline-block;
            a {
                width: 320px;
                height: 240px;
                margin-right: 20px;
                display: inline-block;
                
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .s-v-wrap {
        height: 900px;
        width: 100%;
        overflow: hidden;
    }
</style>
