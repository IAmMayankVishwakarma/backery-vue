<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <header class="header">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand brand scrool">
            <!-- Correct image path: if it's in public/images/logo.png -->
            <img src="/src/assets/images/logo.png" alt="logo" class="width-100" />
          </router-link>
        </div>

        <div id="navbar-collapse-02" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li :class="{ selected: route.path === '/' }">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="{ selected: route.path === '/about' }">
              <router-link to="/about">About Us</router-link>
            </li>
            <li :class="{ selected: route.path === '/menu' }">
              <router-link to="/menu">Menu</router-link>
            </li>
            <li :class="{ selected: route.path === '/reservations' }">
              <router-link to="/reservations">Reservations</router-link>
            </li>
            <li :class="{ selected: route.path === '/gallery' }">
              <router-link to="/gallery">Gallery</router-link>
            </li>
            <li :class="{ selected: route.path === '/contact' }">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </header>
</template>

<style scoped>
/* .selected > a {
  color: #e91e63;
  font-weight: bold;
  text-decoration: underline;
} */
</style>
