

<script>
import store from '../data/store.js'

export default {
    name: "AppButton",

    components: {

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
<a class="to-top" href="#"><i class="fa-solid fa-chevron-up"></i></a>
</template>

<style scoped>
.to-top {
    background: white;
    position: fixed;
    bottom: 16px;
    right: 32px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    opacity: 0;
    color: black;
    pointer-events: none;
    transition: all .4s;
    z-index: 1000;
}

.fa-solid {
    font-size: 2rem;
    z-index: 1000;
}

.to-top.active {
    pointer-events: auto;
    bottom: 32px;
    opacity: 1;
    z-index: 1000;
}
</style>