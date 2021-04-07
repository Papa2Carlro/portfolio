export default {
    computed: {
        locale() {
            return this.$store.getters["store/getLocale"]
        }
    }
}
