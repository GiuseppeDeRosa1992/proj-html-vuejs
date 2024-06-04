<script>
import AppHeader from './components/AppHeader.vue';
import Jumbo from './components/Jumbo.vue';
import JumboComing from './components/JumboComing.vue'
import store from './data/store.js';
export default {
  components: {
    AppHeader,
    Jumbo,
    JumboComing,
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
  <JumboComing />
</template>

<style scoped></style>
