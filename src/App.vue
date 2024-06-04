<script>
import AppHeader from './components/AppHeader.vue';
import Jumbo from './components/Jumbo.vue';
import store from './data/store.js';
export default {
  components: {
    AppHeader,
    Jumbo,
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
</template>

<style scoped></style>
