<template>
    <div class="first__circle" :class="{noAnimation: !animation}">
        <div class="first__circle-level first__circle-level1"></div>
        <div class="first__circle-level first__circle-level2"></div>
        <div class="first__circle-level first__circle-level3"></div>
    </div>
</template>

<script>
export default {
    computed: {
        animation() {
            return this.$store.getters["store/getAnimation"]
        }
    }
}
</script>
