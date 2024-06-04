<script>
import store from '../data/store.js'
import AppSubscribe from './AppSubscribe.vue'
import AppSingleCardMovie from './AppSingleCardMovie.vue'
import AppSingleCardNews from './AppSingleCardNews.vue'

export default {
    name: "AppMain",

    components: {
        AppSingleCardMovie,
        AppSingleCardNews,
        AppSubscribe,
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
    <div class="d-flex flex-wrap">
        <AppSingleCardMovie v-for="movie in store.films" :card="movie" style="width: 23rem; height: 30rem;" />
    </div>
        <AppSingleCardNews style="width: 20rem; height: 20rem;" />

<AppSubscribe />
</template>

<style>
</style>