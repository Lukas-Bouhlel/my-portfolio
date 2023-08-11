
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
let content = document.querySelector(".content");
function updateProgressBar() {
    const progressBar = document.querySelector(".progress-bar");
    const scroll = window.pageYOffset;
    const endPosition = content.offsetTop + content.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.ceil((scroll / endPosition) * 100), 100);
    progressBar.style.width = `${progress}%`;
}

window.onload = function () {
    updateProgressBar();
    document.addEventListener('scroll', updateProgressBar);
}

createApp(App).mount('#app')