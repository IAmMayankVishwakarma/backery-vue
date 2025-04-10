import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Gallery from '../pages/Gallery.vue'
import Menu from '../pages/Menu.vue'
import Reservations from '../pages/Reservations.vue'
import Login from '../pages/Login.vue'

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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
