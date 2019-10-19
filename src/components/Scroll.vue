<template>
  <div :ref="refs">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name: 'better-scroll',
    props: {
        refs: {
            type: String,
            default: 'scrollWrapper'
        },
        click: {
            type: Boolean,
            default: true
        },
        probeType: {
            type: Number,
            default: 3
        },
        startX: {
            type: Number,
            default: 0
        },
        scrollX: {
            type: Boolean,
            default: false
        },
        scrollY: {
            type: Boolean,
            default: true
        },
        eventPassthrough: {
            type: String,
            default: '' // horizontal, vertical
        },
        bounce: {
            type: Boolean,
            default: false
        },
        listData: {
            type: Array,
            default: null
        },
        refreshDelay: {
            type: Number,
            default: 200
        },
        pulldown: {
            type: Boolean,
            default: false
        },
        pullUp: {
            type: Boolean,
            default: false
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        listenBeforeScroll: {
            type: Boolean,
            default: false
        },
        listenScrollEnd: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initScroll();
        });
    },
    watch: {
        listData() {
            setTimeout(() => {
                this.scrollWrapper.refresh();
            }, this.refreshDelay);
        }
    },
    methods: {
        initScroll() {
            let options = {
                startX: this.startX,
                click: this.click,
                probeType: this.probeType,
                scrollX: this.scrollX,
                scrollY: this.scrollY,
                bounce: this.bounce,
                eventPassthrough: this.eventPassthrough
            };

            this.scrollWrapper = new BScroll(this.$refs[this.refs], options);
            console.log(options);

            if (this.listenBeforeScroll) {
                this.scrollWrapper.on('beforeScrollStart', () => {
                    this.$emit('beforeScrollStartCb')
                });
            }

            if (this.listenScroll) {
                this.scrollWrapper.on('scroll', (pos) => {
                    this.$emit('scrollCb', pos);
                });
            }

            if (this.listenScrollEnd || this.pullUp) {
                this.scrollWrapper.on('scrollEnd', pos => {
                    if (this.pullUp) {
                        if (pos.y <= this.scrollWrapper.maxScrollY + 50) {
                            this.$emit('pullupCb');
                        }
                    } else {
                        this.$emit('scorllEndCb', pos);
                    }
                });
            }

            if (this.pulldown) {
                this.scrollWrapper.on('touchEnd', pos => {
                    if (pos.y > 50) {
                        this.$emit('pulldownCb');
                    }
                });
            }
        },
        disable() {
            this.scrollWrapper && this.scrollWrapper.disable();
        },
        enable() {
            this.scrollWrapper && this.scrollWrapper.enable();
        },
        refresh() {
            this.scrollWrapper && this.scrollWrapper.refresh();
        },
        scrollTo() {
            this.scrollWrapper && this.scrollWrapper.scrollTo.apply(this.scrollWrapper, arguments);
        },
        scrollToElement() {
            this.scrollWrapper && this.scrollWrapper.scrollToElement.apply(this.scrollWrapper, arguments);
        }
    }
}
</script>