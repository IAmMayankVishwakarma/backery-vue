<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>
<template>
      <header class="header">
    <nav class="navbar navbar-default navbar-fixed-top">
  
      <!--begin container -->
      <div class="container">
  
        <!--begin navbar -->
        <div class="navbar-header">
          <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
  
          <router-link to="/" class="navbar-brand brand scrool">
            <img src="/public/images/logo.png" alt="logo" class="width-100">
          </router-link>
        </div>
  
        <div id="navbar-collapse-02" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="selected"><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/menu">Menu</router-link></li>
            <li><router-link to="/reservations">Reservations</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
  
            <li class="social"><a href="#" class="first"><i class="fa fa-twitter"></i></a></li>
            <li class="social"><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li class="social"><a href="#" class="last"><i class="fa fa-instagram"></i></a></li>
  
            <li><a href="#" class="purchase">Purchase</a></li>
          </ul>
        </div>
        <!--end navbar -->
  
      </div>
      <!--end container -->
  
    </nav>
    <router-view />
  </header>
  </template>
  