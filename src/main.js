import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue'
const app = createApp(App)
app.component("Navbar",Navbar),
app.component("Border",Border),
app.component('Footer',Footer),
app.component('home-component',Home),
app.mount('#app')
