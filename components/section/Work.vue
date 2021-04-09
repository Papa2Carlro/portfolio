<template>
    <section class="work section" :class="className">
        <div class="work__body">
            <div class="work__body-title">МОИ РАБОТЫ</div>

            <div class="work__slider">
                <img alt=""
                     src="../../static/image/slider/control/left.svg"
                     :class="{disabled: arrow.left}"
                     @click="controlHandler('<--')"
                     class="work__slider-control work__slider-control--left">

                <div class="work__slider-body">
                    <ul
                        class="work__slider-sliders"
                        :style="{width: sliders + 'px', transform: `translate(-${position}px, 0)`}">

                        <li v-for="slide in project" class="work__slider-slide" :class="{active: slide.active}">
                            <div class="work__slider-main">
                                <img :src="slide.image" class="work__slider-bg" alt="">

                                <div class="work__slider-info">
                                    <div class="work__slider-title">{{ slide.title }}</div>

                                    <div class="work__slider-description">{{ slide.description }}</div>

                                    <ul class="work__slider-links">
                                        <li v-if="slide.links.github" class="work__slider-item">
                                            <a :href="slide.links.github" class="work__slider-link">GitHub</a>
                                        </li>

                                        <li v-if="slide.links.link" class="work__slider-item">
                                            <a :href="slide.links.link" class="work__slider-link">Look live</a>
                                        </li>

                                        <li v-if="slide.links.more" class="work__slider-item">
                                            <nuxt-link :to="slide.links.more" class="work__slider-link">Read More
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <img alt=""
                     src="../../static/image/slider/control/right.svg"
                     :class="{disabled: arrow.right}"
                     @click="controlHandler('-->')"
                     class="work__slider-control work__slider-control--right">
            </div>
        </div>

        <img src="../../static/image/footer/bg.svg" alt="" class="work__bg">
    </section>
</template>

<script>
export default {
    name: 'Work',
    props: ['className'],
    data: () => ({
        project: [],
        breakpoints: {
            320: [320, 0],
            576: [470, 320],
            768: [550, 470],
            992: [750, 550],
            1200: [1000, 750],
            1570: [1300, 1000]
        },
        arrow: {left: null, right: null},

        active: 0,
        width: 1000,

        slideActive: 3,
    }),
    computed: {
        sliders() {
            return this.project.length * this.width
        },
        position() {
            return this.active ? this.active * this.width : 0
        }
    },
    watch: {
        active() {
            this.arrowDisabled()
            this.project.map((slide, index) => slide.active = this.active === index)
        }
    },
    created() {
        const breakpoint = Object.entries(this.breakpoints)

        this.getData()
        this.widthHandler()
        this.arrowDisabled()

        breakpoint.map(([breakpoint, width]) => this.mediaQueryMin(breakpoint, width))
        breakpoint.reverse().map(([breakpoint, width]) => this.mediaQueryMax(breakpoint, width))
    },
    methods: {
        widthHandler() {
            const width = document.body.offsetWidth

            if (width >= 1570) {
                this.width = 1300
            } else if (width >= 1200 && width < 1570) {
                this.width = 1000
            } else if (width >= 992 && width < 1200) {
                this.width = 750
            } else if (width >= 768 && width < 992) {
                this.width = 550
            } else if (width >= 576 && width < 768) {
                this.width = 470
            } else if (width >= 320 && width < 576) {
                this.width = 320
            }
        },

        mediaQueryMin(breakpoint, [min, max]) {
            const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`)

            mediaQuery.addEventListener('change', (e) => this.width = e.matches ? min : this.width);
        },
        mediaQueryMax(breakpoint, [min, max]) {
            const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

            mediaQuery.addEventListener('change', (e) => this.width = e.matches ? max : this.width);
        },

        getData() {
            this.$store.dispatch('store/getProject')
            this.$store.dispatch("store/getSetting")

            this.active = this.$store.getters["store/getSlidedPosition"]
            this.$store.getters["store/getProject"].map((project, index) => {
                project.active = index === this.active
                this.project.push(project)
            })
        },
        controlHandler(direction) {
            switch (direction) {
                case '-->':
                    this.active = this.active + 1 !== this.project.length ? this.active + 1 : this.active
                    break

                case '<--':
                    this.active = this.active !== 0 ? this.active - 1 : this.active
                    break
            }
        },
        arrowDisabled() {
            this.arrow.left = this.active === 0
            this.arrow.right = this.active + 1 === this.project.length
        }
    }
}
</script>
