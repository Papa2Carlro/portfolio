<template>
    <div class="page" :class="{isIndex: loader}">

        <Loader v-if="loader"/>

        <main v-else class="page__main">
            <FistSection/>

<!--            <Who/>-->

<!--            <Work/>-->

<!--            <WhyMe/>-->

<!--            <ContactMe/>-->
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

export default {
    name: 'MainPage',
    components: {FistSection, ContactMe, WhyMe, Who, Work, Loader},
    data: () => ({
        loader: true
    }),
    mounted() {
        this.loader = false
    }
}
</script>
