<template>
  <div>
    <h1>film à voir</h1>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "FilmView",

  computed: mapState(["films"]),
};
</script>
