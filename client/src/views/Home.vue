<template>
  <div class="container">
    <div class="row ">
      <div class="col-sm-12 col-md-8 col-lg-8 col-xl-9">
        <appHeader />
        <card/>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <profile />
      </div>

      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from "@/components/appHeader.vue";
import profile from "@/components/profile.vue";
import card from "@/components/card.vue";

export default {
  name: "Home",
  components: {
    appHeader,
    profile,
    card
  },
};
</script>

<style scoped>
.container{
  max-width: 96%;
}
</style>