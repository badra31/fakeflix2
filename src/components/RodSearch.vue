
<template>
  <div>
    <div class="search">
      <input
        id="input"
        value=""
        type="text"
        v-on:keyup.enter="getData()"
        placeholder="Rechercher"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "RodSearch",
  props: {},

  computed: {},

  methods: {
    getData: function () {
      this.$store.commit(
        "incrementSearch",
        document.getElementById("input").value
      );
      this.$store.dispatch("addSelect");
    },
  },
};
</script>



<style scoped>
.search {
  margin-right: 15px;
}
</style>