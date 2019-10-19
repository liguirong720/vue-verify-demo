<template>
    <section class="box">
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item, index) in left" :class="{current: currentIndex === index}" @click="handleLeftClick(index)" :key="index">
                        <span class="left-item">{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="item in right" class="right-item right-item-hook" :key="item.name">
                        <h2>{{item.name}}</h2>
                        <ul>
                            <li v-for="cell in item.cells" :key="cell.id">
                                <div>{{cell.text}}</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'Better_Scroll',
    data() {
        return {
            left: ['语文','数学', '音乐', '体育', '英语', '物理', '化学', '生物'],
            right: [{
                name: '语文',
                cells: [{
                    id: '语文1',
                    text: '语文1'
                },{
                    id: '语文2',
                    text: '语文2'
                }]
            },{
                name: '数学',
                cells: [{
                    id: '数学1',
                    text: '数学1'
                },{
                    id: '数学2',
                    text: '数学2'
                }]
            },{
                name: '音乐',
                cells: [{
                    id: '音乐1',
                    text: '音乐1'
                },{
                    id: '音乐2',
                    text: '音乐2'
                }]
            },{
                name: '体育',
                cells: [{
                    id: '体育1',
                    text: '体育1'
                },{
                    id: '体育2',
                    text: '体育2'
                }]
            },{
                name: '英语',
                cells: [{
                    id: '英语1',
                    text: '英语1'
                },{
                    id: '英语2',
                    text: '英语2'
                }]
            },{
                name: '物理',
                cells: [{
                    id: '物理1',
                    text: '物理1'
                },{
                    id: '物理2',
                    text: '物理2'
                }]
            },{
                name: '化学',
                cells: [{
                    id: '化学1',
                    text: '化学1'
                },{
                    id: '化学2',
                    text: '化学2'
                },{
                    id: '化学3',
                    text: '化学1'
                },{
                    id: '化学4',
                    text: '化学2'
                }]
            },{
                name: '生物',
                cells: [{
                    id: '生物1',
                    text: '生物1'
                },{
                    id: '生物2',
                    text: '生物2'
                }]
            }],
            listHeight: [],
            scrollY: 0,
            currentIndex: 0
        };
    },
    mounted() {
        this.$nextTick(() => {
            this._initScroll();
            this._getHeight();
        })
    },
    methods: {
        _initScroll() {
            this.leftEl = new BScroll(this.$refs.left, {
                click: true
            });
            this.rightEl = new BScroll(this.$refs.right, {
                click: true,
                probeType: 3
            });
            this.rightEl.on('scroll', (pos) => {
                this.scrollY = Math.abs(pos.y);
            });
            this.rightEl.on('scrollEnd', (pos) => {
                this.scrollY = Math.abs(pos.y);
                for (let i = 0; i < this.listHeight.length; i++) {
                    if(this.scrollY > this.listHeight[i] && this.scrollY < this.listHeight[i + 1]) {
                        this.currentIndex = i;
                    }
                }
            });
        },
        _getHeight() {
            let rightItems = this.$refs.right.querySelectorAll('.right-item-hook');
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < rightItems.length; i++) {
                height += rightItems[i].clientHeight;
                this.listHeight.push(height);
            }
        },
        handleLeftClick(index) {
            let rightItems = this.$refs.right.querySelectorAll('.right-item-hook');
            this.rightEl.scrollToElement(rightItems[index], 300);
        }
    }
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
.box {
    .content {
        display: flex;
        position: absolute;
        top: 100px;
        bottom: 10px;
        width: 100%;
        overflow: hidden;
        background-color: #eee;

        .left {
            flex: 0 0 160px;
            width: 160px;
            background-color: #f3f5f7;
            ul {
                list-style: none;
                li {
                    list-style: none;
                    width: 100%;
                    height: 100%;
                    list-style: none;

                    .left-item {
                        display: block;
                        width: 100%;
                        height: 100px;
                        line-height: 100px;
                        text-align: center;
                        border-bottom: 1px solid yellow;
                    }
                }
            }
        }

        .current {
            background: #eee;
        }

        .right {
            flex: 1;
            ul {
                list-style: none;
                .right-item li {
                    width: 100%;
                    height: 100px;
                    line-height: 100px;
                    text-align: center;
                    border-bottom: 1px solid yellow;
                }
            }
        }
    }
    .foot {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        z-index: 99;
    }
}
</style>
