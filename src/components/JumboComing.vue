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
    <div class="position-relative margin-section">
        <div class="my-fs d-flex justify-content-left">
            <div class="w-50"></div>
            <div class="my-coming-w d-flex flex-column align-self-center text-center">
                <div class="my-green fs-3 fw-bold">COMING SOON MOVIE</div>
                <div class="my-coming-title">MAX STILL</div>
                <span class="my-coming-bg my-jon-emily">
                    JON PLAYER
                    <span class="my-green">&</span>
                    EMILY ROSE
                </span>
                <!-- Countdown -->
                <div class="d-flex justify-content-center" id="demo">
                    <div class="d-flex flex-column m-1">
                        <div class="my-coming-bg my-green my-coming-sq" id="days"></div>
                        <div class=" my-green">Days</div>
                    </div>
                    <div class="d-flex flex-column m-1">
                        <div class="my-coming-bg my-orange my-coming-sq" id="hours"></div>
                        <div class=" my-orange">Hours</div>
                    </div>
                    <div class="d-flex flex-column m-1">
                        <div class="my-coming-bg my-blue my-coming-sq" id="minutes"></div>
                        <div class=" my-blue">Minutes</div>
                    </div>
                    <div class="d-flex flex-column m-1">
                        <div class="my-coming-bg my-yellow my-coming-sq" id="seconds"></div>
                        <div class=" my-yellow">Seconds</div>
                    </div>
                </div>
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

.my-fs {
    height: 800px;
}

.my-fs::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: url(../assets/img/coming-jumbo.jpg);
    z-index: -1;
    background-size: cover;
    background-position: top right -40rem;
}

.my-coming-w {
    width: 20%;
}

.my-coming-bg {
    background-color: rgba(0, 0, 0, 0.393);
}

.my-coming-sq {
    width: 60px;
    height: 60px;
    font-size: 20px;
    margin: 1rem 0.5rem;
    padding-top: 0.9rem;
}

.my-coming-title {
    font-size: 80px;
    font-weight: 400;
}

.my-jon-emily {
    width: 370px;
    height: 50px;
    font-size: 25px;
    font-weight: 600;
    padding-top: 0.3rem;
}

.my-orange {
    color: #FFA800;
    font-weight: 500;
}

.my-green {
    color: #13BE13;
    font-weight: 500;
}

.my-blue {
    color: #6FE0B2;
    font-weight: 500;
}

.my-yellow {
    color: #CEDB38;
    font-weight: 500;
}
</style>