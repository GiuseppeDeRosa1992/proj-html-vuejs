<script>
import store from "../data/store.js";

export default {
    name: "Jumbo",

    data() {
        return {
            store,

            imgActive: 0,

            timer: 0
        }
    },

    methods: {
        // metodi per far vedere e nascondere le frecce
        showButton() {
            document.getElementById("rigth").classList.remove("d-none")
            document.getElementById("left").classList.remove("d-none")
        },
        hideButton() {
            document.getElementById("rigth").classList.add("d-none")
            document.getElementById("left").classList.add("d-none")
        },

        // metodo per cambiare immagine visualizzata
        nextImg() {
            clearInterval(this.timer)
            if (this.imgActive == 0) {
                this.imgActive = 1
            } else {
                this.imgActive = 0
            }
            this.intervallo()
        },

        // timer per cambiare immagine ogni 5s
        intervallo() {
            this.timer = setInterval(() => {
                if (this.imgActive == 0) {
                    this.imgActive = 1
                } else {
                    this.imgActive = 0
                }
            }, 5000);
        }
    },
    mounted() {
        this.intervallo()
    }
}
</script>

<template>
    <div class="position-relative my-mb margin-section" @mouseover="showButton()" @mouseleave="hideButton()">
        <!-- Immagini che scorrono -->
        <figure class="m-0 p-0 my-jumbo-h">
            <img src="../assets/img/slider.jpg" alt="" class="img-fluid my-jumbo-h" v-show="this.imgActive == 0">
            <img src="../assets/img/slider-2.jpg" alt="" class="img-fluid my-jumbo-h" v-show="this.imgActive == 1">
        </figure>

        <!-- Box con testo -->
        <div class="text-center position-absolute">
            <div class="d-flex flex-column">
                <h6>Welcome To Our Movie Site</h6>
                <h1 class="my-jumbo-title">OUR SPECIAL <span class="my-green">MOVIES</span></h1>
                <p class=" my-jumbo-p  align-self-center  my-fs">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been
                    the industry standard dummy text ever since the 1500s, when an unknown
                </p>
            </div>
            <button class="my-rounded-button rounded-pill">Read More</button>
        </div>
        <!-- Frecce dx/sx -->
        <i id="rigth" class="fa-solid fa-circle-chevron-right position-absolute rigth d-none" @click="nextImg()"></i>
        <i id="left" class="fa-solid fa-circle-chevron-left position-absolute left d-none" @click="nextImg()"></i>

    </div>
</template>

<style scoped>
div.position-absolute {
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 620px;
}

.my-jumbo-h {
    height: 700px;
    width: 100%;
}

i.left {
    top: 50%;
    left: 2rem;
    border-radius: 50%;
    cursor: pointer;
}

i.rigth {
    top: 50%;
    left: calc(100% - 2rem);
    transform: translate(-100%);
    border-radius: 50%;
    cursor: pointer;
}

.fa-solid {
    font-size: 1.7rem;
}


.fa-circle-chevron-left,
.fa-circle-chevron-right {
    color: #13be135d;
}

.my-fs {
    font-size: 16px;
}

.my-green {
    color: #13BE13;
    font-weight: 500;
}

.my-jumbo-title {
    font-size: 50px;
    font-weight: 350;
}

.my-jumbo-p {
    width: 500px;
    font-weight: 400;
}

.my-rounded-button {
    padding: 0.5rem 1rem;
    background-color: #13BE13;
    color: white;
    font-weight: 500;
}

/* Hover */
.fa-circle-chevron-right:hover,
.fa-circle-chevron-left:hover {
    color: #13BE13;
}
</style>