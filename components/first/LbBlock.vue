<template>
    <div class="first__grid">
        <div class="first__grid-panel">
            <img src="../../static/image/first/lbBlock/grid.svg" alt="" class="first__grid-body">

            <div :style="{top: 12 + (y * 15) + 'px', left: 12 + (x * 15) + 'px'}" class="first__grid-circle"></div>
        </div>

        <img src="../../static/image/first/lbBlock/line.svg" alt="" class="first__grid-line">
    </div>
</template>

<script>
export default {
    name: 'Grid',
    data: () => ({
        interval: null,

        x: 0,
        y: 0,
        dir: 'vertical'
    }),
    computed: {
        animation() {
            return this.$store.getters["store/getAnimation"]
        }
    },
    watch: {
        animation() {
            this.animation ? this.setAnimation() : clearInterval(this.interval)
        }
    },
    mounted() {
        this.setAnimation()
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        setAnimation() {
            this.interval = setInterval(() => this.randomCoordinate(), 450)
        },

        randomCoordinate() {
            const coordinate = this.dir === 'vertical' ? 'x' : 'y'
            const max = coordinate === 'x'
                ? this.y === 6 ? 14 : 15
                : this.x === 15 ? 5 : 6

            const rand = Math.floor(Math.random() * max)

            this[coordinate] = rand
            this.dir = this.dir === 'vertical' ? 'horizonal' : 'vertical'
        }
    }
}
</script>
