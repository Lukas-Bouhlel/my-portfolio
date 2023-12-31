import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Biography from './pages/Biography.vue'
import Projects from './pages/MyProjects.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.scss'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/biography', component: Biography },
        { path: '/projects', component: Projects },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        const progressBar = document.querySelector(".progress-bar");
        progressBar.style.width = '0%';
        return { top: 0 };
    },
})

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

const app = createApp(App)
app.use(router)
app.mount('#app')