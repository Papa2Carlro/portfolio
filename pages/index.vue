<template>
  <div class="home" :class="{isIndex: loader}">
    <Loader v-if="loader" color="#282932"/>

    <main v-else class="home__main">

    </main>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {},
  data: () => ({
    loader: true
  }),
  methods: {

  }
}
</script>
