<script>
import store from '../data/store.js';
import AppSingleCardNews from './AppSingleCardNews.vue'



export default {
    name: "Latest News",
    components: {
        AppSingleCardNews,
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
    <div class="container mt-3">
        <div class="my-movie-pl p-1">
            <h3 class="ms-2">Latest News</h3>
            <div class="ms-2">Lorem Ipsum is simply dummy text of the printing and typesettin</div>
        </div>
    </div>

    <div class="row container m-0 m-auto">
        <div class="col-6 px-2">
            <AppSingleCardNews v-for="news in store.news.splice(0, 1)" :card="news" class="my-2" />
        </div>
        <div class="col-6 px-2 d-flex flex-wrap">
            <!-- <div class="row">
                <div class="col-6 px-2 pb-2"> -->
            <AppSingleCardNews v-for="news in store.news.splice(0, 4)" :card="news" class="my-square" />
            <!-- </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
.my-square {
    width: calc(50% - 1rem);
    margin: 0.5rem;
    aspect-ratio: 1;
}
</style>