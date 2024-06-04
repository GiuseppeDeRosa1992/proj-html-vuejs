<script>
import store from '../data/store.js';



export default {
    components: {


    },
    data() {
        return {
            store,
            videoAttivo: 0,
            // slideAttiva: 0,
        }
    },
    methods: {
        getImage(percorso) {
            return new URL(`../assets/img/${percorso}`, import.meta.url)
        },

        // changeMovie(index) {
        //     this.videoAttivo == index
        // }
    },
    mounted() {
    }
}
</script>

<template>
    <div class="container mt-3">
        <div class="my-movie-pl p-1">
            <h3 class="ms-2">Movie Playlist</h3>
            <div class="ms-2">Lorem Ipsum is simply dummy text of the printing and typesettin</div>
        </div>

        <div class="d-flex">
            <div class="my-col-pl-left">
                <div>
                    <iframe width="860" height="570" :src="store.films[videoAttivo].video" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="my-col-pl-right d-flex flex-column">
                <div class="p-3 mb-1 pl-bg">
                    <h5 class="fw-bold">New Movie</h5>
                    <div>Plying 24</div>
                </div>
                <div class="pl-bg p-3 d-flex flex-column overflow-y-auto">
                    <div class="mb-4 d-flex w-100 my-hov-pl p-1" @click="this.videoAttivo = i"
                        v-for="film, i in store.films">
                        <img class="my-width-pl" :src="getImage(film.img_sq)" alt="">
                        <div class="ms-3 w-100">
                            <div class="fw-bold fs-5 mb-1">{{ film.title }}</div>
                            <div class="fw-semibold fs-6 mb-1">{{ film.views }} Views</div>
                            <div class="d-flex justify-content-between">
                                <div>{{ film.release }}</div>
                                <div>{{ film.duration }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





</template>

<style scoped>
.my-movie-pl {
    border-left: solid 2px #13BE13;
    border-bottom: solid 1px #182028;
    margin-bottom: 6rem;
}

.my-col-pl-left {
    width: 880px;
    max-height: 570px;
}

.my-col-pl-right {
    width: 400px;
    max-height: 570px;
}

.my-hov-pl:hover {
    background-color: gray;

}


.pl-bg {
    background-color: #182028;
}

.my-container-pl {
    width: 315px;
}

.my-width-pl {
    width: 30%;
}
</style>