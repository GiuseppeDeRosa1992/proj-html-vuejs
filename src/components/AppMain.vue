<script>
import store from '../data/store.js'
import AppSubscribe from './AppSubscribe.vue'
import AppSingleCardMovie from './AppSingleCardMovie.vue'
import AppSingleCardNews from './AppSingleCardNews.vue'
import AppNewMovieCarousel from './AppNewMovieCarousel.vue'
import Jumbo from './Jumbo.vue'
import MoviePlaylist from './MoviePlaylist.vue'
import JumboComing from './JumboComing.vue'
import MovieCategories from './MovieCategories.vue'
import LatestNews from './LatestNews.vue'

export default {
    name: "AppMain",

    components: {
        AppSingleCardMovie,
        AppSingleCardNews,
        AppSubscribe,
        AppNewMovieCarousel,
        Jumbo,
        MoviePlaylist,
        JumboComing,
        MovieCategories,
        LatestNews,
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
    <!-- <div class="d-flex flex-wrap">
        <AppSingleCardMovie v-for="movie in store.films" :card="movie" style="width: 23rem; height: 30rem;" />
    </div>
        <AppSingleCardNews v-for="element in store.news" :card="element" style="width: 20rem; height: 20rem;" /> -->
    <Jumbo />
    <section class="margin-section">
        <AppNewMovieCarousel />
    </section>
    <MoviePlaylist />
    <JumboComing />
    <MovieCategories />

    <section class="margin-section">
        <LatestNews />
    </section>

    <AppSubscribe />
</template>

<style></style>