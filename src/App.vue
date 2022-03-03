<template>
  <div id="app">
    <div class="flex" id="navBar">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/Film">Film</router-link>
      </nav>
      <RodSearch />
    </div>
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src

import RodSearch from "@/components/RodSearch.vue";

export default {
  name: "HomeView",
  components: {
    RodSearch,
  },
};
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navBar {
  display: flex;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
