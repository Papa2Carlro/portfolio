<template>
    <div class="central" :class="{noAnimation: !animation}">
        <div class="central__circle central__circle--top">
            <div class="central__circle-body">
                <div class="central__l1">
                    <div class="central__l1-body"></div>

                    <div class="central__dot"></div>
                </div>

                <div class="central__l2">
                    <div class="central__l2-body"></div>

                    <div class="central__dot"></div>
                </div>

                <div class="central__l3">
                    <div class="central__l3-body"></div>

                    <div class="central__dot"></div>
                </div>
            </div>
        </div>

        <div class="central__info">
            <div class="central__info-code central__info-code--top">{{ topCode }}</div>

            <div class="central__info-name">{{ name }}</div>

            <div class="central__info-code central__info-code--bottom">{{ bottomCode }}</div>
        </div>

        <div class="central__circle central__circle--bottom">
            <div class="central__circle-body">
                <div class="central__l1">
                    <div class="central__l1-body"></div>

                    <div class="central__dot"></div>
                </div>

                <div class="central__l2">
                    <div class="central__l2-body"></div>

                    <div class="central__dot"></div>
                </div>

                <div class="central__l3">
                    <div class="central__l3-body"></div>

                    <div class="central__dot"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Central',
    props: ['name'],
    data: () => ({
        top1: 0,
        top2: 1,
        top3: 1,
        top4: 0,
        top5: 1,

        bottom1: 0,
        bottom2: 1,
        bottom3: 1,
        bottom4: 0,
        bottom5: 1,

        interval: null
    }),
    computed: {
        topCode() {
            return [this.top1, this.top2, this.top3, this.top4, this.top5].join('')
        },
        bottomCode() {
            return [this.bottom1, this.bottom2, this.bottom3, this.bottom4, this.bottom5].join('')
        },
        animation() {
            return this.$store.getters["store/getAnimation"]
        }
    },
    created() {
        this.setAnimation()
    },
    watch: {
        animation() {
            this.animation ? this.setAnimation() : clearInterval(this.interval)
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        setAnimation() {
            this.interval = setInterval(() => {
                this[`top${this.random('index')}`] = this.random('bool')
                this[`bottom${this.random('index')}`] = this.random('bool')
            }, 350)
        },

        random(type) {
            switch (type) {
                case 'bool':
                    return Math.random() < 0.5 ? 1 : 0

                case 'index':
                    const float = Math.random()

                    if (float >= .8) {
                        return 5
                    } else if (float >= .6 && float < .8) {
                        return 4
                    } else if (float >= .4 && float < .6) {
                        return 3
                    } else if (float >= .2 && float < .4) {
                        return 2
                    } else if (float >= 0 && float < .2) {
                        return 1
                    }
            }
        }
    }
}
</script>
