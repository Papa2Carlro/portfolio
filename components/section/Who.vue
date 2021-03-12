<template>
    <section class="section who">

        <div class="who__info">
            <div class="who__info-title">КТО ЕСТЬ Я?</div>

            <div class="who__info-text">{{ text }}</div>
        </div>

        <div class="who__image">
            <img src="../../static/image/who_is_me/vector.svg" alt="" class="who__image-vector">
            <img src="../../static/image/who_is_me/man.png" alt="" class="who__image-man">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Who',
    data: () => ({
        text: ''
    }),
    created() {
        this.$store.dispatch("store/getWhoMe")

        this.text = this.$store.getters["store/getWhoIsMe"]
    }
}
</script>
