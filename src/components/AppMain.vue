<script>
import store from '../data/store.js';
import Jumbo from './Jumbo.vue';
import MoviePlaylist from './MoviePlaylist.vue';
import JumboComing from './JumboComing.vue';
import LatestNews from './LatestNews.vue';
import AppSubscribe from './AppSubscribe.vue';


export default {
    components: {
        MoviePlaylist,
        Jumbo,
        JumboComing,
        LatestNews,
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
}
</script>

<template>



    <main>
        <Jumbo />

        <MoviePlaylist />

        <JumboComing />

        <LatestNews />

        <AppSubscribe />

    </main>



</template>

<style scoped></style>
