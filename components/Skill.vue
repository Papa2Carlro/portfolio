<template>
    <li class="skill__item">
        <div @mouseover="mouseoverHandler" @mouseout="mouseoutHandler" class="skill__item-clip">
            {{ index < 10 ? '0' + index : index }}
        </div>

        <div class="skill__item-body" ref="body" :class="{anim1, anim2}" :style="{height: height + 'px'}">
            <span class="skill__item-text">{{ text }}</span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Skill',
    props: ['index', 'text'],
    data: () => ({
        anim1: false,
        anim2: false,

        height: 0,
    }),
    mounted() {
        this.height = this.$refs.body.scrollHeight

        window.addEventListener('resize', () => this.height = this.$refs.body.scrollHeight)
    },
    methods: {
        mouseoverHandler() {
            this.anim1 = true

            setTimeout(() => this.anim2 = true, 400)
        },
        mouseoutHandler() {
            this.anim2 = false

            setTimeout(() => this.anim1 = false, 400)
        }
    }
}
</script>
