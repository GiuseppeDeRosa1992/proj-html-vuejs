<script>
import store from "../data/store.js";

export default {
    name: "Jumbo",

    data() {
        return {
            store,

            imgActive: 0,
        }
    },

    methods: {
        showButton() {
            document.getElementById("rigth").classList.remove("d-none")
            document.getElementById("left").classList.remove("d-none")
        },
        hideButton() {
            document.getElementById("rigth").classList.add("d-none")
            document.getElementById("left").classList.add("d-none")
        },
        nextImg() {
            if (this.imgActive == 0) {
                this.imgActive = 1
            } else {
                this.imgActive = 0
            }
        },
        prevImg() {
            if (this.imgActive == 0) {
                this.imgActive = 1
            } else {
                this.imgActive = 0
            }
        },
    }
}
</script>

<template>
    <div class="position-relative my-fs my-mb" @mouseover="showButton()" @mouseleave="hideButton()">
        <figure class="m-0 p-0">
            <img src="../assets/img/slider.jpg" alt="" class="img-fluid" v-show="this.imgActive == 0">
            <img src="../assets/img/slider-2.jpg" alt="" class="img-fluid" v-show="this.imgActive == 1">
        </figure>
        <div class="text-center w-25 position-absolute">
            <h6 class="m-0">Welcome To Our Movie Site</h6>
            <h2 class="m-0">OUR SPECIAL <b class="text-success">MOVIES</b></h2>
            <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa rem, iusto nostrum architecto esse
                asperiores reiciendis consequuntur exercitationem numquam autem, molestias officia, velit optio et fugit
                sint blanditiis repellat.
            </p>
            <button class="bg-success text-white rounded-pill">Read More</button>
        </div>

        <i id="rigth" class="fa-solid fa-circle-chevron-right position-absolute rigth d-none" @click="nextImg()"></i>


        <i id="left" class="fa-solid fa-circle-chevron-left position-absolute left d-none" @click="prevImg()"></i>

    </div>
</template>

<style scoped>
div.position-absolute {
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
}

i.left {
    top: 50%;
    border-radius: 50%;
    cursor: pointer;
}

i.rigth {
    top: 50%;
    left: 100%;
    transform: translate(-100%);
    border-radius: 50%;
    cursor: pointer;
}

.fa-solid {
    font-size: 2.5rem;
}

.fa-circle-chevron-left {
    color: #13be13;
}

.fa-circle-chevron-right {
    color: #13be13;
}

.my-fs {
    font-size: 0.7rem;
}

.my-mb {
    margin-bottom: 4rem;
}
</style>