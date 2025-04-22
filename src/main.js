import'../public/assets/bootstrap/css/bootstrap.css'
import'../public/assets/bootstrap/css/bootstrap-docs.css'
import'../public/assets/bootstrap/css/prettify.css'
import { createApp } from 'vue'

import router from './router'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Border from './components/Border.vue'
import Footer from './components/Footer.vue'
// import Home from './pages/Home.vue'


const app = createApp(App)
app.use(router)
app.component("Navbar",Navbar),
app.component("Border",Border),
app.component('Footer',Footer),
// app.component('home-component',Home),
app.mount('#app')
