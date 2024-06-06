import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


createApp(App).mount('#app')

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if (window.scrollY > 100) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})