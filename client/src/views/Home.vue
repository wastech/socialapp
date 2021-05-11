<template>
  <div class="container">
    <div class="row ">
      <div class="col-sm-12 col-md-8 col-lg-8 col-xl-9 ">
        <card :items="items" />
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <profile />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import postService from "@/services/postService";
import profile from "@/components/profile.vue";
import card from "@/components/card.vue";

export default {
  name: "Home",
  components: {
    profile,
    card,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getPosts() {
      try {
        await postService.allpost().then((response) => {
          this.items = response.data.posts;
          console.log(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
.container {
  max-width: 96%;
}
</style>
