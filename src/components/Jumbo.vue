<script>
import store from "../data/store.js";

export default {
    name: "Jumbo",

    data() {
        return {
            store,

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
        }
    }
}
</script>

<template>
    <div class="position-relative my-fs" @mouseover="showButton()" @mouseleave="hideButton()">
        <figure class="m-0 p-0">
            <img src="../assets/img/slider.jpg" alt="" class="img-fluid">
        </figure>
        <div class="text-center w-50 position-absolute">
            <h6 class="m-0">Welcome To Our Movie Site</h6>
            <h2 class="m-0">OUR SPECIAL <b class="text-success">MOVIES</b></h2>
            <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa rem, iusto nostrum architecto esse
                asperiores reiciendis consequuntur exercitationem numquam autem, molestias officia, velit optio et fugit
                sint blanditiis repellat.
            </p>
            <button class="bg-success text-white rounded-pill">Read More</button>
        </div>
        <button class="position-absolute rigth d-none bg-black" id="rigth">
            <i class="fa-regular fa-circle-right"></i>
        </button>
        <button class="position-absolute left d-none bg-black" id="left">
            <i class="fa-regular fa-circle-left"></i>
        </button>
    </div>
</template>

<style scoped>
div.position-absolute {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

button.left {
    top: 50%;
    color: white;
    border-radius: 50%;
}

button.rigth {
    top: 50%;
    left: 100%;
    transform: translate(-100%);
    color: white;
    border-radius: 50%;
}

button.left:hover {
    color: green;
}

button.rigth:hover {
    color: green;
}

.my-fs {
    font-size: 0.5rem;
}
</style>