<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="__instagram">
        <div class="">
          <i class="fab fa-instagram"></i>

          <small>
            <a href="/" v-if="$store.state.user">{{
              $store.state.user.name
            }}</a>
          </small>
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
                v-model.trim="name"
                placeholder=" search for username e.g wastech"
                aria-label="Search"
              />
              <button
                class="btn btn-success"
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
                <h6>
                  {{ item.name }}
                </h6>
              </router-link>
            </section>
            <div class="history__nohistory" v-if="!items.length">
              <h6>No search user found</h6>
            </div>
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
      name: "",
      items: [],
    };
  },
  computed: {
    isDisabled: function () {
      return !this.name;
    },
  },

  methods: {
    search: function () {
      axios
        .get(`search-users/${String(this.name).toLowerCase()}`)
        .then((response) => {
          this.items = response.data.user;
        })

        .catch((error) => {
          return error;
        });
    },
    clear() {
      this.email = "";
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
a {
  color: #000;
  text-decoration: none;
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
@media only screen and (max-width: 576px) {
  .__instagram {
    margin-top: 1em;
    font-weight: 700;
    font-size: large;
  }
  small {
    margin-left: 1em;
  }
  .searchBar {
    margin-top: 1em;
    padding: 10px 40px 10px 3px;
    background-color: #f4f9f9;
    font-size: large;
    border-radius: 5px;
  }
  h6 {
    margin-top: 1em;
    font-weight: 700;
    font-size: x-medium;
  }
}
</style>
