<script>
import AppHeader from './components/AppHeader.vue';
import Jumbo from './components/Jumbo.vue';
import JumboComing from './components/JumboComing.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import MoviePlaylist from './components/MoviePlaylist.vue'
import store from './data/store.js';
export default {
  components: {
    AppHeader,
    Jumbo,
    JumboComing,
    AppFooter,
    AppMain,
    MoviePlaylist,
  },

  data() {

    return {

      store
    }
  },
  created() {

  }
}

</script>

<template>
  <AppHeader />
  <Jumbo />
  <MoviePlaylist />
  <JumboComing />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>
