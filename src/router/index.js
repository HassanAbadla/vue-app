import { createRouter, createWebHistory } from 'vue-router'
// import store from './store/index.js'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import axios from 'axios'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    // beforeEnter: (to, from, next) => {
    //   if(!store.getters['authenticated']) {
    //     return next({ name: 'Home' })
    //   }
    // },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
