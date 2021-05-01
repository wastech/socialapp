<template>
  <div>
    <appHeader />
    <router-view />
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
/*@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');*/

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
#app {
  font-family: "Roboto", sans-serif;
}
</style>
