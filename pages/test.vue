<template>
    <div class="test">

    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            count: 0,
            show: true,
            width: 300,
        }
    },
    methods: {
        handleResize() {
            this.count++
            console.log('handle')
        },
        changeSize() {
            this.width = Math.round(Math.random() * 400) + 100
        },
    },
}
</script>
