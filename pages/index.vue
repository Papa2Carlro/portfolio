<template>
    <div class="page" :class="{isIndex: loader}">

        <Loader v-if="loader"/>

        <main v-else class="page__main">

<!--            <Setting/>-->

            <FistSection/>

            <Who/>

            <Work/>

            <WhyMe/>

            <ContactMe/>

        </main>
    </div>
</template>

<script>
import Loader from "../components/Loader"
import Work from "../components/section/Work"
import Who from "../components/section/Who"
import WhyMe from "../components/section/WhyMe"
import ContactMe from "../components/section/ContactMe"
import FistSection from "../components/section/First"
import Setting from "../components/Setting"

export default {
    name: 'MainPage',
    components: {Setting, FistSection, ContactMe, WhyMe, Who, Work, Loader},
    data: () => ({
        loader: true,
        duration: 2.5 * 1000,
        can: true,
        slide: 0,

        className0: '',
        className1: '',
        className2: '',
        className3: '',
        className4: '',

        sensor: false,
    }),
    mounted() {
        document.body.classList[this.sliderSetting ? 'add' : 'remove']('lock')
        document.body.classList[this.sliderSetting ? 'add' : 'remove']('lock-slider')

        // this.sensor = ('ontouchstart' in window)
        // document.addEventListener('wheel', this.wheel)
        this.loader = false
    },
    computed: {
        sliderSetting() {
            return this.$store.getters["store/getSliderSection"]
        },
        slide() {
            return this.$store.getters["store/getSlide"]
        }
    },
    methods: {
        wheel(e) {
            if (!this.can || this.sensor) return

            this.can = false
            e.deltaY > 0 ? this.scrollHandler('down') : this.scrollHandler('up')
        },
        scrollHandler(type) {
            switch (type) {
                case 'down':
                    if (this.slide === 4) return
                    this[`className${this.slide}`] = 'top'
                    this.slide++
                    this[`className${this.slide}`] = 'isNext'

                    setTimeout(() => {
                        this[`className${this.slide}`] = 'isActive'
                        this[`className${this.slide - 1}`] = ''
                    }, 1.2 * 1000)
                    break

                case 'up':
                    if (this.slide === 0) return
                    this[`className${this.slide}`] = 'top'
                    this.slide--
                    this[`className${this.slide}`] = 'isPrev'

                    setTimeout(() => {
                        this[`className${this.slide}`] = 'isActive'
                        this[`className${this.slide + 1}`] = ''
                    }, 1.2 * 1000)
                    break
            }
        },
    },
    watch: {
        getActivePage() {
            return Math.round(window.pageYOffset / window.innerHeight) + 1;
        },
        can() {
            setTimeout(() => this.can = true, this.duration)
        },
        sliderSetting() {
            // const rect = document.body.getBoundingClientRect().top * -1
            // const position = this.sliderSetting ? rect : 0
            // const h = document.body.offsetWidth
            //
            // if (position) {
            //     const value = Math.round(rect / h) + 1
            //     this.$store.commit('store/setSlide', {type: null, action: 'num', value})
            // }
            if (this.sliderSetting) {
                window.scrollTo(0, 0)
                document.addEventListener('wheel', this.wheel)
            } else {
                // window.scrollTo(0, (this.slide - 1) * h * 2)
                this.className = new Array(5).fill('')
                document.removeEventListener('wheel', this.wheel)
            }
            document.body.classList[this.sliderSetting ? 'add' : 'remove']('lock-slider')
        },
        sensor() {
            this.$store.commit("store/changeSetting", {setting: 'sliderSection', body: !this.sensor})
        }
    }
}
</script>
