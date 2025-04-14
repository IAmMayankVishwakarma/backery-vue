import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import UserLayouts from '@/layouts/UserLayouts.vue'
import AdminLayouts from '@/layouts/AdminLayouts.vue'
// User Pages
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Gallery from '@/pages/Gallery.vue'
import Menu from '@/pages/Menu.vue'
import Reservations from '@/pages/Reservations.vue'
import Login from '@/pages/Login.vue'
// Admin Pages
import AdminHome from '@/admin/AdminHome.vue'


const routes = [
  {
    path: '/',
    component: UserLayouts,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About },
      { path: 'contact', name: 'Contact', component: Contact },
      { path: 'gallery', name: 'Gallery', component: Gallery },
      { path: 'menu', name: 'Menu', component: Menu },
      { path: 'reservations', name: 'Reservations', component: Reservations },
      { path: 'login', name: 'Login', component: Login },
    ],
  },
  {
    path: '/admin',
    component: AdminLayouts,
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: AdminHome,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
