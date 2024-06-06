<script>
import store from '../data/store.js';
import AppSingleCardMovie from './AppSingleCardMovie.vue';



export default {
    components: {
        AppSingleCardMovie,


    },
    data() {
        return {
            store,
            filter: ``,

        }
    },
    methods: {
        getImage(percorso) {
            return new URL(`../assets/img/${percorso}`, import.meta.url)
        },

        // metodo (da perfezionare) per selezionare come attiva la categoria al click
        clickElement() {
            if (this.filter == ``) {
                document.getElementById(`1`).classList.add(`my-clicked-add`);
                document.getElementById(`2`).classList.remove(`my-clicked`);
                document.getElementById(`3`).classList.remove(`my-clicked`);
                document.getElementById(`4`).classList.remove(`my-clicked`);
                document.getElementById(`5`).classList.remove(`my-clicked`);

            }
            else if (this.filter == `Coming Soon`) {
                document.getElementById(`1`).classList.remove(`my-clicked-add`);
                document.getElementById(`2`).classList.add(`my-clicked`);
                document.getElementById(`3`).classList.remove(`my-clicked`);
                document.getElementById(`4`).classList.remove(`my-clicked`);
                document.getElementById(`5`).classList.remove(`my-clicked`);
            }
            else if (this.filter == `Latest Movie`) {
                document.getElementById(`1`).classList.remove(`my-clicked-add`);
                document.getElementById(`2`).classList.remove(`my-clicked`);
                document.getElementById(`3`).classList.add(`my-clicked`);
                document.getElementById(`4`).classList.remove(`my-clicked`);
                document.getElementById(`5`).classList.remove(`my-clicked`);
            }
            else if (this.filter == `Top Rating`) {
                document.getElementById(`1`).classList.remove(`my-clicked-add`);
                document.getElementById(`2`).classList.remove(`my-clicked`);
                document.getElementById(`3`).classList.remove(`my-clicked`);
                document.getElementById(`4`).classList.add(`my-clicked`);
                document.getElementById(`5`).classList.remove(`my-clicked`);
            }
            else {
                document.getElementById(`1`).classList.remove(`my-clicked-add`);
                document.getElementById(`2`).classList.remove(`my-clicked`);
                document.getElementById(`3`).classList.remove(`my-clicked`);
                document.getElementById(`4`).classList.remove(`my-clicked`);
                document.getElementById(`5`).classList.add(`my-clicked`);
            }
        }

    },
    mounted() {
        this.clickElement()

    }
}
</script>

<template>
    <div class="container margin-section">
        <!-- Intestazione Sezione -->
        <div class="my-movie-pl p-1">
            <h3 class="ms-2">Movie Categories</h3>
            <div class="ms-2">Lorem Ipsum is simply dummy text of the printing and typesettin</div>
        </div>

        <!-- Selettore categorie -->
        <div class="d-flex justify-content-around my-categories-flex-w mb-5 fs-5">
            <div id="1" @click="filter = ``, clickElement()">All</div>
            <div id="2" class="my-underline" @click="filter = `Coming Soon`, clickElement()">Coming Soon</div>
            <div id="3" class="my-underline" @click="filter = `Latest Movie`, clickElement()">Latest Movie</div>
            <div id="4" class="my-underline" @click="filter = `Top Rating`, clickElement()">Top Rating</div>
            <div id="5" class="my-underline" @click="filter = `TV Series`, clickElement()">TV Series</div>
        </div>

        <!-- Stampo cards -->
        <div class="d-flex flex-wrap justify-content-left">
            <AppSingleCardMovie v-for="film, i in store.films" :card="film" class="my-card-flex-categories"
                v-show="film.category == filter || filter == ``" />
        </div>
    </div>
</template>

<style scoped>
.my-categories-flex-w {
    width: 50%;
}

.my-card-flex-categories {
    width: 30%;
    height: 520px;
    margin: 1rem;
}

.my-underline {
    border-bottom: 2px solid #060F19;
}

.my-clicked {
    border-bottom: 2px #13BE13 solid;

}

.my-clicked-add {
    color: #13BE13;

}

/* Hover */
.my-underline:hover {
    border-bottom: 2px #13BE13 solid;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
}
</style>