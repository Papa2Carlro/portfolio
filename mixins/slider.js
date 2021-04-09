export default {
    data: () => ({
        className: ''
    }),
    methods: {
        setData() {
            const stopEl = this.scrollType === 'down' ? this.slide - 1 : this.slide + 1

            this.className = this.slideActive === this.slide
                ? 'isActive'
                : this.slideActive > this.slide ? 'isNext' : 'isPrev'

            if (this.scrollType === 'up') this.className += this.slideActive === this.slide ? ' z-index' : ''

            if (this.slideActive === stopEl) {
                this.className = 'isActive no-anim'
                setTimeout(() => this.className = this.scrollType === 'down' ? 'isPrev no-anim' : 'isNext no-anim', 2 * 1000)
            }
        }
    },
    computed: {
        scrollType() {
            return this.$store.getters["store/getScrollType"]
        },
        sliderSetting() {
            return this.$store.getters["store/getSliderSection"]
        },

    },
    watch: {
        sliderSetting() {
            this.sliderSetting ? this.setData() : this.className = ''
        }
    }
}
