<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="__instagram">
        <div class="">
          <i class="fab fa-instagram"></i> <small>Wastech</small>
        </div>
      </div>
      <div class="searchBar">
        <div data-bs-toggle="modal" data-bs-target="#exampleModal1">
          <i class="fas fa-search"></i> <span>search</span>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">search for users</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="d-flex" @submit.prevent="search">
              <input
                class="form-control me-2"
                type="search"
                v-model="email"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success"
                :disabled="isDisabled"
                type="submit"
              >
                Search
              </button>
            </form>

            <section v-for="item in items" :key="item.id">
              <router-link
                v-bind:to="{
                  name: 'showuser',
                  params: { id: item._id },
                }"
              >
                <h6 aria-label="Close">{{ item.email }}</h6>
              </router-link>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: this.$route.query.email,
      items: [],
    };
  },
  computed: {
    isDisabled: function() {
      return !this.email;
    },
  },
  created() {
    if (this.email != null) {
      this.search();
    }
  },
  watch: {
    "$route.query.email": {
      handler: function(newVal, oldVal) {
        if (newVal != oldVal) {
          this.email = this.$route.query.email;
          this.search();
        }
      },
      immediate: true,
    },
  },
  methods: {
    search: function() {
      axios
        .post("http://localhost:5000/search-users", {
          params: {
            email: this.email,
          },
        })
        .then((response) => {
          this.$router.push({ query: { email: this.email } });
          this.items = response.data.user;

          console.log("this is search", this.items);
        })

        .catch((error) => {
          return error;
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.__instagram {
  margin-top: 1em;
  font-weight: 700;
  font-size: xx-large;
}
small {
  margin-left: 0.5em;
}
.searchBar {
  margin-top: 2em;
  padding: 8px 150px 10px 10px;
  background-color: #f4f9f9;
  font-size: x-large;
  border-radius: 5px;
}
h6 {
  margin-top: 1em;
  font-weight: 700;
  font-size: x-medium;
}
</style>
