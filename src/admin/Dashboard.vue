<template>
<div class="maincontainer">
    <div class="sidebar p-3 shadow opacity-75"> 
      <h2 class="text-center text-light">Admin Panel</h2>
      <ul>
        <li>
          <router-link to="/admin" class="text-white">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/users" class="text-white">Users</router-link>
        </li>
        <li>
          <router-link to="/contacts" class="text-white">Contacts</router-link>
        </li>
        <li>
          <router-link to="/reservations" class="text-white">Reservations</router-link>
        </li>
        <li>
          <router-link to="/sales" class="text-white">Sales</router-link>
        </li>
        <li>
          <router-link to="/settings" class="text-white">Settings</router-link>
        </li>
        <li>
          <router-link to="/logout" class="text-white">Logout</router-link>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <h1 class="mb-4">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard! Manage your application settings and user accounts here.</p>

      <div class="row mt-5 g-4">
        <!-- Reservations Card -->
        <div class="col-md-4 text-center">
          <div class="card shadow p-4">
            <h5 class="card-title">Reservations</h5>
            <p class="card-text display-6">150</p>
          </div>
        </div>

        <!-- Sales Card -->
        <div class="col-md-4 text-center">
          <div class="card shadow p-4">
            <h5 class="card-title">Sales</h5>
            <p class="card-text display-6">₹45,000</p>
          </div>
        </div>

        <!-- Revenue Card -->
        <div class="col-md-4 text-center">
          <div class="card shadow p-4">
            <h5 class="card-title">Revenue</h5>
            <p class="card-text display-6">₹1,25,000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHome",
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url('/assets/bootstrap/css/bootstrap.css');
@import url('/assets/bootstrap/css/bootstrap-docs.css');
@import url('/assets/bootstrap/css/prettify.css');
.maincontainer {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f8f9fa;
}

.sidebar {
  width: 250px;
  min-height: 100vh;
  background-image: url('/src/assets/adminimg/sl_0210121_40570_43.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
}

.sidebar h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f8f9fa;
}

.sidebar ul {
  list-style: none;
  padding-left: 0;
}

.sidebar li {
  margin-bottom: 0.75rem;
  cursor: pointer;
  color: white;
}

.sidebar li a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
}
.sidebar li:hover {
  text-decoration: underline;
}

.main-content {
  margin-left: 250px;
  padding: 2rem;
  height: 100vh;
  background-image: url('/src/assets/adminimg/9019808.jpg');
  background-color: #f8f9fa;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card {
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  color: #f8f9fa;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

.card-text {
  font-size: 2rem;
  font-weight: bold;
  color: #e0e0e0;
}
</style>
