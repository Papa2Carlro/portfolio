<template>
    <div class="page" :class="{isIndex: loader}">

        <Loader v-if="loader"/>

        <main v-else class="page__main">

            <Who/>

            <Work/>

            <WhyMe/>

        </main>
    </div>
</template>

<script>
import Loader from "../components/Loader"
import Work from "../components/section/Work"
import Who from "../components/section/Who"
import WhyMe from "../components/section/WhyMe"

export default {
    name: 'MainPage',
    components: {WhyMe, Who, Work, Loader},
    data: () => ({
        loader: true
    }),
    mounted() {
        this.loader = false
    }
}
</script>
