<script>
import store from "../data/store.js";

export default {
    data() {
        return {
            store,

        }
    },
}
</script>

<template>
    <header>
        <div class="container row m-auto justify-content-between align-items-center">
            <div class="col-8">
                <div class="row">
                    <ul v-for="ul in store.links" class="col-2 m-0 p-1">
                        {{ ul }}
                    </ul>
                </div>
            </div>
            <div class="col-1">
                <span class="col-1"><i class="fa-solid fa-bag-shopping"></i></span>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
