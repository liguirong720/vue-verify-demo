<template>
    <div class="v-wrap">
        <div class="v-item" v-for="(item, index) in imgLists" :key="index">
            <img v-lazy="item.picurl">
        </div>
    </div>
</template>
<script>
export default {
    name: 'VueLazyload',
    data() {
        return {
            imgLists: [
                { 'picurl': 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002QA9kw0QwiVQ.jpg' },
                { 'picurl': 'http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg' },
                { 'picurl': 'http://b-ssl.duitang.com/uploads/item/201604/23/20160423185321_K2ueY.jpeg' },
                { 'picurl': 'http://pic21.nipic.com/20120426/9940080_164340613124_2.jpg' },
                { 'picurl': 'http://pic35.nipic.com/20131115/7002646_153323018000_2.jpg' },
                { 'picurl': 'http://pic38.nipic.com/20140228/7815256_142332883000_2.jpg' },
                { 'picurl': 'http://img1.imgtn.bdimg.com/it/u=1366904711,2699461808&fm=214&gp=0.jpg' },
                { 'picurl': 'http://www.forestry.gov.cn/uploadfile/main/2013-6/image/2013-6-19-dbdb3e3f20b644ec959960e9d8308eda.jpg' }
            ]
        }
    }
}
</script>
<style lang="less">
    .v-wrap {
        width: 100%;

        .v-item{
            width: 100%;
            height: 360px;
            margin-top: 10px;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
