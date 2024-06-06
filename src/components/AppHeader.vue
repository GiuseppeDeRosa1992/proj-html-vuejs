<script>
import store from "../data/store.js";

export default {
    name: "AppHeader",

    data() {
        return {
            store,

        }
    },
}
</script>

<template>
    <header>
        <!-- ICONE SOCIAL E LOGIN -->
        <div class="container m-auto row m-0 justify-content-between py-3 px-0">
            <div class="col-8 p-0">
                <div class="row m-0">
                    <div class="col-12 p-0">
                        <i class="fa-regular fa-envelope me-1"></i>
                        <span class="me-1">Superhit Top Movie:</span>
                        <span class="my-green px-1 me-4">Interstellar</span>
                        <a class="me-2" href="#">
                            <i class="fa-brands fa-facebook-f px-1" style="color: #3B5998;"></i>
                        </a>
                        <a class="me-2" href="#">
                            <i class="fa-brands fa-twitter px-1" style="color:#00ACEE;"></i>
                        </a>
                        <a class="me-2" href="#">
                            <i class="fa-brands fa-linkedin-in px-1" style="color:#0E76A8;"></i>
                        </a>
                        <a class="me-2" href="#">
                            <i class="fa-brands fa-instagram px-1" style="color:#B6181C;"></i>
                        </a>
                        <a class="me-2" href="#">
                            <i class="fa-brands fa-google-plus-g px-1" style="color:#DB4A39;"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-2 text-end p-0">
                <i class="fa-solid fa-lock me-2 my-fs-small"></i>
                <span class="my-fs-small">Login</span>
            </div>
        </div>

        <hr class="m-0">

        <!-- LOGO E SEARCH BAR -->
        <div class="container row m-0 justify-content-between py-5 m-auto p-0 align-items-center">
            <div class="col-2 p-0">
                <figure class="m-0">
                    <img src="../assets/img/cropped-logo.png" alt="Logo-Movie" class="img-fluid">
                </figure>
            </div>
            <div class="col-6 p-0">
                <div class="row m-0 justify-content-end">
                    <div class="col-10 p-0">
                        <div class="input-group mb-3">
                            <button class="btn dropdown-toggle my-border" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">All Movie</button>
                            <ul class="dropdown-menu">
                                <li v-for="link in store.searchLinks">
                                    <a class="dropdown-item text-dark" href="#"> {{ link }} </a>
                                </li>
                            </ul>
                            <input type="text" class="form-control my-border my-searchbar"
                                aria-label="Text input with dropdown button" placeholder="Search...." />
                            <button class="py-2 my-button">Search</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <hr class="m-0">

        <!-- LINK CON MENU A TENDINA -->
        <div class="container d-flex justify-content-between py-4 px-0 linkbar">
            <div class="p-0 d-flex my-head-flex-w">
                <template v-for="link in store.headerLinks">
                    <button class="btn dropdown-toggle p-0 text-start me-4" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {{ link.titolo }}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li v-for="subLink in link.link">
                            <a class="dropdown-item" href="#">{{ subLink }}</a>
                            <a class="dropdown-item" href="#">{{ subLink.titolo }}</a>
                        </li>
                    </ul>
                </template>
                <div>
                    <a href="#" class="col-1 p-0 text-decoration-none me-4">Blog</a>
                    <a href="#" class="col-1 p-0 text-decoration-none">Contact Us </a>
                </div>

            </div>
            <div>
                <a>
                    <i class="fa-solid fa-bag-shopping"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped>
a {
    color: white;
    font-weight: 500;
    font-size: 18px;
}

button {
    color: white;
    border: none;
    font-weight: 500;
    font-size: 18px;
}

hr {
    color: rgba(162, 159, 159, 0.495);
}

ul {
    inset: unset;
    width: 200px;
}

.my-fs-small {
    font-size: 14px
}

.my-green {
    color: #13BE13;
    font-weight: 500;
}

.my-button {
    padding: 1rem 1.2rem;
    background-color: #13BE13;
    color: white;
    font-weight: 500;
    height: 50px;
}

.my-border {
    border-left: 1px solid rgba(162, 159, 159, 0.3);
    border-bottom: 1px solid rgba(162, 159, 159, 0.3);
    border-top: 1px solid rgba(162, 159, 159, 0.3);
    padding: 0 2rem;
    background: transparent;
    height: 50px;
    color: rgba(162, 159, 159, 0.476);
    border-radius: 0%;
}

.my-head-flex-w {
    width: 60%;
    justify-content: left;
}


/* Hover, focus, placeholder */
a:hover {
    color: #13BE13;
    transition: 1s;
}

.my-border:hover {
    border-left: 1px solid rgba(162, 159, 159, 0.3);
    border-bottom: 1px solid rgba(162, 159, 159, 0.3);
    border-top: 1px solid rgba(162, 159, 159, 0.3);
    color: #13be1397;
    transition: 1s;
}

.linkbar button:hover {
    color: #13BE13;
    transition: 1s;
}

.my-searchbar::placeholder {
    color: rgba(162, 159, 159, 0.476);

}

.my-searchbar:focus {
    background: transparent;

}
</style>
