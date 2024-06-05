<script>
import store from '../data/store.js'

export default {
    name: "AppSingleCardMovie",

    components: {

    },

    props: 
        ["card"],
        

    data() {
        return {
            store,
        }
    },

    methods: {
        getImage: function(img) {
                return new URL(`../assets/img/${img}`, import.meta.url).href;
            }
    },

    mounted() {

    }
};

</script>

<template>
    <div class="card position-relative">
        <img class="object-fit-cover" :src="getImage(card.img_rec)" alt="">
        <div class="filtro">
        </div>
        <span class=" z-3 position-absolute top-0 end-0 hidden-top-right"><i class="fa-solid fa-star" style="color: #13be13;"></i> {{ card.rating }}/10</span>
        <span class=" z-3 position-absolute top-0 start-0 hidden-top-left">{{ card.duration }}</span>
        <span class=" z-3 position-absolute bottom-0 end-0 views">{{ card.views }} views</span>
        <span class=" z-3 position-absolute bottom-0 start-0 details">Details</span>
        <span class="z-3 icon position-absolute top-50 start-50 translate-middle"><i class="fa-regular fa-circle-play"></i></span>
        <div class="z-3 info position-absolute">
            <h4>{{ card.title }}</h4>
            <div>
                <span style="line-height: 3rem;">Category: {{ card.category }}</span>
            </div>
            <div>
                <span style="line-height: 3rem;">Release: {{ card.release }}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span v-for="genre in card.genre" style="line-height: 2.5rem; margin-right: 0.5rem;"> {{ genre }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    color: white;
}

.card{
   overflow: hidden;
   border-radius: 0;
   border: none;
}

img {
    width: 100%;
    height: 100%;
    /* z-index: 1; */
}

.hidden-top-right {
    margin-right: -145px;
    padding: 0.5rem 2rem;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    margin-top: 1rem;
}

.hidden-top-left {
    margin-left: -145px;
    background: #13be13;
    padding: 0.5rem 2rem;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-top: 1rem;
}

.filtro {
    width: 100%;
    height: 100%;
    position: absolute;
    /* z-index: 2; */
}

.details {
    background-color: #060f19;
    padding: 0.4rem 1.5rem;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-bottom: 1rem;
}

.views {
    background-color: #060f19;
    padding: 0.4rem 1.5rem;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    margin-bottom: 1rem;
}

.fa-regular {
    font-size: 4rem;
    margin-bottom: 900px !important;
}

.info {
    width: calc(100% - 4rem);
    height: 100px;
    bottom: 4.5rem;
    left: 1.5rem;
    /* border: 1px solid white; */
    overflow: hidden;
}


@keyframes rotate {
    0% {
        transform: rotate(0);
    
    }

    100% {
        transform: rotate(360deg);
        
    }
}

@keyframes bounce {
    20%,50%,80%,to{
        transform: translateY(0);
    }
    40%{
        transform: translateY(-30px);
    }
    70%{
        transform: translateY(-15px);
    }
    90%{
        transform: translateY(-4px);
        
    }
}

/* hover effects */

.card:hover .info{
    overflow: none;
    height: 180px;
    transition: 400ms;
}

.card:not(:hover) .info{
    overflow: hidden;
    height: 100px;
    transition: 400ms;
}

.card:hover .fa-regular {
    margin-bottom: 150px !important;
    transition: all 0.4s ease-in-out;
    animation-name: rotate;
    animation-name: bounce;
    animation-duration: 1s;
    animation-delay: 0.2s;
    
}

.card:not(:hover) .fa-regular {
    margin-bottom: 900px !important;
    transition: all 0.4s ease-in-out;
    
}

.card:hover .hidden-top-right {
    margin-right: -10px;
    transition: all 0.4s ease-in-out;

}

.card:hover .hidden-top-left {
    margin-left: -10px;
    transition: all 0.4s ease-in-out;

}

.card:not(:hover) .hidden-top-left {
    margin-left: -145px;
    transition: all 0.4s ease-in-out;

}

.card:not(:hover) .hidden-top-right {
    margin-left: -145px;
    transition: all 0.4s ease-in-out;

}

.card:hover .filtro{
    background: linear-gradient(to bottom, rgba(19,190,19,0.4) 0%,rgba(125,185,232,0) 100%);
    transition: 400ms;
}

.card:hover img {
    transform: scale(1.3);
    transition: 400ms; 
}

.card:not(:hover) img {
    transform: scale(1);
    transition: 400ms; 
}

.details:hover {
    background-color: #13be13;
    transition: all 0.4s ease-in-out;
}

.views:hover {
    background-color: #13be13;
    transition: all 0.4s ease-in-out;
}
</style>