import { createApp } from 'vue'
import App from '../../App.vue'
import * as VueRouter from 'vue-router'
import Home from '../../pages/Home.vue';
import Biography from '../../pages/Biography.vue';
import MyProjects from '../../pages/MyProjects.vue'

const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
    path: '/biography',
    name: 'Biography',
    component: Biography
    },
    {
      path: '/my-projects',
      name: 'MyProjects',
      component: MyProjects
    }
  ]
})

// const app = createApp(App)
// app.use(router).mount('#app')
// app.mount('app')