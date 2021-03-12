<template>
  <div class="page" :class="{isIndex: loader}">

    <Loader v-if="loader"/>

    <main v-else class="page__main">

      <Work/>

    </main>
  </div>
</template>

<script>
import Loader from "../components/Loader"
import Work from "../components/page/Work"

export default {
  name: 'MainPage',
  components: {Work, Loader},
  data: () => ({
    loader: true
  }),
  mounted() {
    this.loader = false
  }
}
</script>
