<template>
    <section class="first section section--100vh" :class="className">
        <img src="../../static/image/first/bg.jpg" alt="" class="first__bg">

        <div class="first__content">
            <ul class="skill skill--top">
                <Skill v-for="item in skills[0]" :key="item.index" :index="item.index" :text="item.value"/>
            </ul>

            <RtBlock/>

            <Central :name="name"/>

            <LbBlock/>

            <RbBlock/>

            <ul class="skill skill--bottom">
                <Skill v-for="item in skills[1]" :key="item.index" :index="item.index" :text="item.value"/>
            </ul>
        </div>
    </section>
</template>

<script>
import Central from "../first/Central"
import LbBlock from "../first/LbBlock"
import RbBlock from "../first/RbBlock"
import RtBlock from "../first/RtBlock"
import Skill from "../Skill"

export default {
    name: 'FistSection',
    props: ['className'],
    data: () => ({
        name: 'Max Priymak',
        animation: true,

        mediaQuery: null
    }),
    mounted() {
        this.$store.dispatch('store/getSkills')

        this.animation = !(document.body.offsetWidth <= 992)
        this.mediaQueryMin()
    },
    computed: {
        skills() {
            return this.$store.getters["store/getSkills"]
        },
        animationAdaptive() {
            return this.$store.getters["store/getAnimationAdaptive"]
        }
    },
    watch: {
        animation() {
            this.$store.commit("store/changeSetting", {
                setting: 'animation',
                body: this.animation,
                adaptive: true
            })
        }
    },
    methods: {
        mediaQueryMin(breakpoint = 992) {
            this.mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`)

            this.mediaQuery.addEventListener('change', e => this.animation = this.animationAdaptive ? e.matches : false)
        }
    },
    components: {Skill, RtBlock, RbBlock, LbBlock, Central}
}
</script>
