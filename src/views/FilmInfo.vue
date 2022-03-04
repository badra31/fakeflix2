<template>
  <div class="film">
    <!-- <h2>This is an about page {{ this.$route.params.id }}</h2> -->
    <h2>{{ video.title }}</h2>
    <div>
      <img
        :src="`https://image.tmdb.org/t/p/w500/${video.poster_path}`"
        alt="#"
      />
    </div>
    <div v-if="video.id" id="flex">
      <p>Synopsis: {{ video.overview }}</p>
      <p>
        Sortie le: {{ video.release_date }} / langue:
        {{ video.original_language }}
      </p>
    </div>
  </div>
</template>




<script>
import { mapState } from "vuex";
export default {
  name: "FilmView",
  props: {},
  data: function () {
    return {
      video: {},
    };
  },
  created: function () {
    this.addOverview();
    // this.addvideo();
  },
  computed: mapState(["videos", "overview"]),

  methods: {
    addOverview: function () {
      fetch(
        `${this.$store.state.fetch}movie/${this.$route.params.id}?api_${this.$store.state.key}&language=fr-FR`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.video = response;
        });
    },

    // addvideo: function () {
    //   fetch(
    //     `${this.$store.state.fetch}movie/${this.$route.params.id}/videos?api_${this.$store.state.key}&language=fr-FR`
    //   )
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log(response);
    //       this.films = response;
    //     });
    // },
  },
};
</script>
 
<style scoped>
.film {
  color: aliceblue;
}
</style>