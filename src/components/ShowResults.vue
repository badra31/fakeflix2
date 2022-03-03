
<template>
  <div v-if="request" class="search">
    <p>Resultats pour la recherche : {{ request }}</p>
    <div>
      <div v-for="video of videos" v-bind:key="video.id">
        <h2>{{ video.title }}</h2>
        <router-link :to="/film/ + video.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + video.poster_path"
            alt="jaquette"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "ShowResults",
  props: {},

  computed: mapState(["videos", "request"]),

  methods: {},
};
</script>



<style scoped>
.search {
  margin-right: 15px;
}
</style>