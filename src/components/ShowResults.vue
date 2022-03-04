
<template>
  <div v-if="request" class="search">
    <p>Resultats pour la recherche : {{ request }}</p>
    <div>
      <div class="show">
        <div class="col" v-for="video of videos" v-bind:key="video.id">
          <router-link :to="/film/ + video.id" class="link">
            <img
              v-if="video.poster_path"
              :src="'https://image.tmdb.org/t/p/w500/' + video.poster_path"
              alt="jaquette"
            />
            <img v-else src="@/assets/nan.png" alt="jaquette" />
            <h3>{{ video.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
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
img {
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin: 5px;
  padding-top: 20px;
}
.show {
  width: 1400 px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.link {
  color: rgb(196, 194, 192);
}

h3 {
  max-width: 150px;
  margin: 0 auto;
}
</style>