<script>
import store from "../data/store.js";

export default {
    name: "JumboComing",

    data() {

        // COUNTDOWN FINO AL 5 GIUGNO 2026
        let countDownDate = new Date("Jun 4, 2026 18:21:25").getTime();

        // SET INTERVAL CHE SCENDE DI 1 SECONDO
        let interval = setInterval(function () {

            // VARIABILE NOW
            let now = new Date().getTime();

            // VARIABILE DISTANZA CHE E UGUALE ALLA VARIABILE COUNTDOWN - LA VARIABILE NOW
            let distance = countDownDate - now;

            // CALCOLO TEMPO PER GIORNI ORE MINUTI E SECONDI
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // STAMPO IL RISULTATO DEI GIORNI IN PAGINA
            document.getElementById("days").innerHTML = days;
            // STAMPO IL RISULTATO DELLE ORE IN PAGINA
            document.getElementById("hours").innerHTML = hours;
            // STAMPO IL RISULTATO DEI MINUTI IN PAGINA
            document.getElementById("minutes").innerHTML = minutes;
            // STAMPO IL RISULTATO DEI SECONDI IN PAGINA
            document.getElementById("seconds").innerHTML = seconds;

            // SE IL COUNTDOWN è UGUALE A 0 ALLORA IN PAGINA STAMPO COUNTDOWN FINITO
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById("demo").innerHTML = "COUNTDOWN FINITO";
            }
        }, 1000);

        return {
            store,
        }
    },
}
</script>

<template>
    <div class="position-relative">
        <figure class="m-0 p-0">
            <img src="../assets/img/coming-jumbo.jpg" alt="" class="img-fluid">
        </figure>
        <div class="text-center w-50 position-absolute">
            <h6 class="m-0 text-success">COMING SOON MOVIE</h6>
            <h2 class="m-0">MAX STILL</h2>
            <p class="m-0 bg-black opacity-75">
                JON PLAYER
                <span class="text-success">&</span>
                EMILY ROSE
            </p>
            <div class="row justify-content-between m-0 py-2" id="demo">
                <div class="col-2 bg-black text-success p-0" id="days"></div>
                <div class="col-2 bg-black text-danger p-0" id="hours"></div>
                <div class="col-2 bg-black text-primary p-0" id="minutes"></div>
                <div class="col-2 bg-black text-warning p-0" id="seconds"></div>
            </div>
            <div class="row justify-content-between m-0">
                <div class="col-2 text-success p-0">Days</div>
                <div class="col-2 text-danger p-0">Hours</div>
                <div class="col-2 text-primary p-0">Minutes</div>
                <div class="col-2 text-warning p-0">Seconds</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.position-absolute {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>