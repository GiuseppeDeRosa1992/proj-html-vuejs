<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppButton from './components/AppButton.vue';
import store from './data/store.js'

export default {
    name: "App",

    components: {
      AppHeader,
        AppMain,
        AppFooter,
        AppButton,
    },

    data() {
        return {
          store,
        }
    },

    methods: {
      
    },

    mounted() {

    }
};

</script>

<template>
<AppButton />
<AppHeader />
<AppMain />
<AppFooter />
</template>

<style>
</style>