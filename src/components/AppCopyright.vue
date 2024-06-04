<script>
import store from '../data/store.js'


export default {
    name: "AppCopyright",

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
<section class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <div>
                    <a href="">Tram And Conditions</a>
                    <a href="">Policy</a>
                    <a href="">About</a>
                </div>
                <div>
                    <span>© 2020 <a class="footer-link" href="">@Themepul</a> All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
*{
    color: white;
}

.copyright {
    background-color: #060f19;
    padding: 1rem;
}

.footer-link {
    color: #13be13;
    margin: 0;
}

a{
    margin-right: 1.5rem;
    text-decoration: none;
}

a:hover {
    color: #13be13;
    transition: 450ms;
}

.footer-link:hover {
    color: white;
}
</style>