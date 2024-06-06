<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import AppFixedScrollToTop from './components/AppFixedScrollToTop.vue';
import store from './data/store.js';
export default {
  components: {
    AppHeader,
    AppFooter,
    AppMain,
    AppFixedScrollToTop,
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
  <AppMain />
  <AppFooter />
  <AppFixedScrollToTop />
</template>

<style scoped></style>
