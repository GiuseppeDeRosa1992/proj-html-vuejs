<script>
import store from '../data/store.js'

export default {
    name: "AppSingleCardNews",

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
        getImagePath: function(img) {
                return new URL(`./assets/img/${img}`, import.meta.url).href;
            }
    },

    mounted() {

    }
};

</script>

<template>
    <div class="card position-relative">
        <div class="filtro">
        </div>
        <img class="object-fit-cover" src="../assets/img/8-rec.jpg" alt="">
        <span class=" z-3 position-absolute top-0 end-0 hidden-top-right">ciao</span>
        <span class=" z-3 position-absolute bottom-0 end-0 share">share</span>
        <span class=" z-3 position-absolute bottom-0 start-0 details">details</span>
        <div class="position-absolute bottom-0 end-0 socials d-flex justify-content-between">
            <div class="circle">
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="circle">
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="circle">
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="circle">
                <i class="fa-brands fa-facebook-f"></i>
            </div>
        </div>
        <div class="z-3 info position-absolute top-50 start-50 translate-middle">
            <h4>ciaone del deserto</h4>
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
    z-index: 1;
}

.hidden-top-right {
    margin-right: -145px;
    background: #13be13;
    padding: 0.5rem 2rem;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    margin-top: 1rem;
}

.filtro {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
}

.details {
    background-color: #060f19;
    padding: 0.4rem 1.5rem;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-bottom: 1rem;
}

.share {
    padding: 0.4rem 1.5rem;
    margin-bottom: 1rem;
}

.fa-regular {
    font-size: 4rem;
    margin-bottom: 900px !important;
}

.info {
    width: 300px;
    
    /* border: 1px solid white; */
    margin-top: 4rem;
    overflow: hidden;
}

.socials {
    margin-right: -245px;
    margin-bottom: 1rem;
    background: #13be13;
    padding: 0.3rem 1rem;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    z-index: 99;
}

.share:hover ~ .socials {
    margin-right: -10px;
    transition: all 0.4s ease-in-out;
}


.details:hover {
    background-color: #13be13;
    transition: all 0.4s ease-in-out;
}

.circle {
    /* border: 1px solid white; */
    background-color: #222;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;
}




/* hover effects */

.card:hover .hidden-top-right {
    margin-right: -10px;
    transition: all 0.4s ease-in-out;

}

.filtro:hover{
    background: linear-gradient(to bottom, rgba(19,190,19,0.4) 0%,rgba(125,185,232,0) 100%);
    transition: 400ms;

}

.filtro:hover ~ img {
    transform: scale(1.3);
    transition: 400ms; 
}


</style>