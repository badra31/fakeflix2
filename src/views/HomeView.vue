<template>
  <div>
    <div class="home">
      <ShowResults />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ShowResults from "@/components/ShowResults.vue";

export default {
  name: "HomeView",
  components: {
    ShowResults,
  },
};
</script>


