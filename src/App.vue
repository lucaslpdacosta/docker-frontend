<template>
  <nav class="navbar">
    <router-link to="/" class="nav-item">Home</router-link>
    <router-link to="/grupos" class="nav-item">Grupos</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Style the navigation bar (navbar) */
.navbar {
  padding: 10px;
  text-align: right; /* Align the text to the right */
}

/* Style the navigation links (nav-item) */
.nav-item {
  font-weight: bold;
  color: #333; /* Text color */
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px; /* Text size */
}

/* Change the color of active links */
.nav-item.router-link-exact-active {
  color: #42b983;
}
</style>
