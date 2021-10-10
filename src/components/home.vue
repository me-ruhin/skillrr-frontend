<template>
  <div id="home_page">
    <h2>Welcome to SKillrr</h2>
    <div class="topnav">
      <router-link class="active" :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'login' }">Register</router-link>
      <router-link :to="{ name: 'login' }">Dashboard</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import '../../public/css/home.css';
</style>