<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots" v-if="showDots">
            <span class="dot" v-for="(dot, index) in dots" :key="index" :class="{active: currentIndex === index}"></span>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import { addClass } from '../utils/dom';

export default {
    name: 'better-slider',
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        showDots: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 500
        },
        click: {
            type: Boolean,
            default: true
        },
        threshold: {
            type: Number,
            default: 0.3
        },
        speed: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            dots: [],
            currentIndex: 0
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.initSliderWidth();
            this.initDots();
            this.initSlider();
            if (this.autoPlay) {
                this.play();
            }
        });
        window.addEventListener('resize', () => {
            if (!this.sliderRef) {
                return;
            }
            this.initSliderWidth();
            this.sliderRef.refresh();
        })
    },
    methods: {
        initSliderWidth() {
            this.children = this.$refs.sliderGroup.children;
            let sliderWidth = this.$refs.slider.clientWidth;
            let width = 0;
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                addClass(child, 'slider-item');
                child.style.width = sliderWidth + 'px';
                width += sliderWidth;
            }
            if (this.loop) {
                width += 2 * sliderWidth;
            }
            this.$refs.sliderGroup.style.width = width + 'px';
        },
        initSlider() {
            this.sliderRef = new BScroll(this.$refs.slider, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: this.loop,
                    threshold: this.threshold,
                    speed: this.speed
                }
            });

            this.sliderRef.on('scrollEnd', (pos) => {
                this.currentIndex = this.sliderRef.getCurrentPage().pageX;
                if (this.autoPlay) {
                    this.play();
                }
            });

            this.sliderRef.on('beforeScrollStart', () => {
                if (this.autoPlay) {
                    clearTimeout(this.timer);
                }
            });
        },
        initDots() {
            this.dots = new Array(this.children.length);
        },
        play() {
            this.timer = setTimeout(() => {
                this.sliderRef.next();
            }, this.interval);
        }
    },
    destroyed() {
        clearTimeout(this.timer);
    }
}
</script>
<style lang="less">
    .slider {
        width: 100%;
        height: 300px;
        overflow: hidden;
        position: relative;
        white-space: nowrap;

        .slider-group{
            height: 300px;

            .slider-item {
                float: left;
                box-sizing: border-box;
                text-align: center;
                height: 300px;

                img {
                    display: block;
                    width: 100%;
                }
            }
        }
        
        .dots {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 10px;
            text-align: center;
            
            .dot {
                background: #666;
                display: inline-block;
                margin: 0 4px;
                height: 8px;
                width: 8px;
                border-radius: 50%;
            }

            .active {
                width: 16px;
                border-radius: 5px;
                background: #fff;
            }
        }
    }
</style>
