<template>
  <div id="app">
    <h1>Fakeflix</h1>
    <div class="flex" id="navBar">
      <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/favoris">Favoris</router-link> |
        <router-link to="/film">Film</router-link> |
        <router-link to="/view">Film à voir</router-link>
      </nav>
      <RodSearch />
    </div>
    <router-view />
  </div>
</template>


<script>
import RodSearch from "@/components/RodSearch.vue";

export default {
  name: "HomeView",
  components: {
    RodSearch,
  },
};
</script>




<style>
body {
  background-color: black;
}

h1 {
  font-size: 100px;
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  width: 1400px;
  margin: 0 auto;
}
#navBar {
  display: flex;
  justify-content: space-between;
  background-color: gray;
  align-items: center;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
