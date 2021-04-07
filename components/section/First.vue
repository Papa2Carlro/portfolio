<template>
    <section class="first section section--100vh">
        <img src="../../static/image/first/bg.png" alt="" class="first__bg">

        <div class="first__content">

            <ul class="skill skill--top">
                <Skill v-for="item in skills[0]" :key="item.index" :index="item.index" :text="item.value" />
            </ul>

            <RtBlock/>

            <Central :name="name"/>

            <LbBlock/>

            <RbBlock/>

            <ul class="skill skill--bottom">
                <Skill v-for="item in skills[1]" :key="item.index" :index="item.index" :text="item.value" />
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
    data: () => ({
        name: 'Max Priymak',
    }),
    mounted() {
        this.$store.dispatch('store/getSkills')
    },
    computed: {
        skills() {
            return this.$store.getters["store/getSkills"]
        }
    },
    components: {Skill, RtBlock, RbBlock, LbBlock, Central}
}
</script>

<!--


            -->
