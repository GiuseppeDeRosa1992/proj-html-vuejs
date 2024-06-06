<script>
import store from '../data/store.js'

export default {
    name: "AppFixedScrollToTop",

    components: {

    },

    data() {
        return {
            store,
            scroll: null,
            visible: null
        }
    },

    methods: {
        getFixed() {
            this.scroll = window.scrollY
            if (this.scroll > 100) {
                this.visible = "myBtn"
                console.log("sei in if")
            }
        },
        topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    },
    created() {
        window.addEventListener('scroll', this.getFixed)
    },
    mounted() {
    }
};
</script>

<template>

    <button @click="topFunction()" class="d-none" :class="this.visible" title="Go to top">
        <i class="fa fa-angle-up"></i>
    </button>
</template>

<style scoped>
.myBtn {
    display: block !important;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;
}

i {
    color: black;
}
</style>