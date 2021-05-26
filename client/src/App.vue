<template>
  <div>
    <appHeader />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
export default {
  components: {
    appHeader,
  },
};
</script>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
#app {
  font-family: "Roboto", sans-serif;
} */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
#app {
  font-family: "Poppins", sans-serif;
}
</style>
