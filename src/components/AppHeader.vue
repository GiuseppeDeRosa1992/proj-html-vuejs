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
        <div class="container m-auto row m-0 justify-content-between py-2">
            <div class="col-8 p-0">
                <div class="row">
                    <div class="col-12 p-0">
                        <i class="fa-regular fa-envelope"></i>
                        <span>Superhit Top Movie</span>
                        <span class="text-success px-1"> ** King Star **</span>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f px-1 text-primary"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-twitter px-1 text-primary"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-linkedin-in px-1 text-primary"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-instagram px-1 text-danger"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-google-plus-g px-1 text-danger"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-2 text-end p-0">
                <i class="fa-solid fa-lock"></i>
                <span>Login</span>
            </div>
        </div>

        <hr class="m-0">

        <!-- LOGO E SEARCH BAR -->
        <div class="container row m-0 justify-content-between py-2 m-auto p-0 align-items-center">
            <div class="col-2 p-0">
                <figure class="m-0">
                    <img src="../assets/img/cropped-logo.png" alt="Logo-Movie" class="img-fluid">
                </figure>
            </div>
            <div class="col-6 p-0">
                <div class="row m-0 justify-content-end">
                    <div class="col-8 p-0">
                        <div class="input-group mb-3">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">All Movie</button>
                            <ul class="dropdown-menu">
                                <li v-for="link in store.searchLinks">
                                    <a class="dropdown-item text-dark" href="#"> {{ link }} </a>
                                </li>
                            </ul>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button"
                                placeholder="Search....">
                        </div>
                    </div>
                    <div class="col-1 p-0">
                        <button class="py-2 bg-success">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <hr class="m-0">
        <!-- LINK CON MENU A TENDINA -->
        <div class="container row m-auto justify-content-between align-items-center m-0 p-0 py-2 my-fs">
            <div class="col-9 p-0">
                <div class="row">
                    <template v-for="link in store.headerLinks">
                        <button class="btn dropdown-toggle col-2 m-0 p-0 text-start" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ link.titolo }}
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li v-for="subLink in link.link">
                                <a class="dropdown-item" href="#">{{ subLink }}</a>
                            </li>
                        </ul>
                    </template>
                    <a href="#" class="col-1 p-0 text-decoration-none">Blog</a>
                    <a href="#" class="col-1 p-0 text-decoration-none">Contacts </a>
                </div>
            </div>
            <div class="col-1 text-end">
                <a class="col-1">
                    <i class="fa-solid fa-bag-shopping"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped>
a {
    color: white;
}

a:hover {
    color: green;
}

button {
    color: white;
    border: none;
}

button:hover {
    color: green;
}

ul {
    inset: unset;
    width: 200px;
}
</style>
