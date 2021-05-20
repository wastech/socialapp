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
  mounted() {
    console.log(process.env.VUE_APP_ROOT_URL);
  },
};
</script>
<style>
/*@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');*/

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
#app {
  font-family: "Roboto", sans-serif;
}
</style>
