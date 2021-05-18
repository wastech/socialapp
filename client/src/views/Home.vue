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
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item " :class="{ disabled: currentPage === 1 }">
          <router-link
            :to="{ query: { page: currentPage - 1 } }"
            class="page-link"
            href="#"
            >Previous</router-link
          >
        </li>
        <li
          class="page-item"
          :class="{ active: currentPage === index + 1 }"
          v-for="(item, index) in totalPages"
          :key="index"
        >
          <router-link
            :to="{ query: { page: index + 1 } }"
            class="page-link"
            href="#"
            >{{ index + 1 }}</router-link
          >
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <router-link
            :to="{ query: { page: currentPage + 1 } }"
            class="page-link"
            href="#"
            >Next</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import Api from "@/services/Api";
//import postService from "@/services/postService";
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
      totalGrades: 0,
      limit: 12,
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalGrades / this.limit);
    },
  },
  watch: {
    "$route.query.page": {
      immediate: true,
      handler(page) {
        page = parseInt(page) || 1;
        this.getPosts(page);
        this.currentPage = page;
      },
    },
  },
  methods: {
    async getPosts(page) {
      const pageCheck = page ? page : 1;
      try {
        
        await Api()
          .get(`allpost?page=${pageCheck}`)
          .then((response) => {
            this.items = response.data.posts;
            this.totalGrades = response.data.count;
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
   mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
.container {
  max-width: 96%;
}
</style>
