<template>
  <div class="main">
    <div class="image">
      <img :src="post.pic" alt="" />
    </div>
    <div class="name">
      <router-link
        v-bind:to="{
          name: 'profile',
        }"
      >
        <h2>{{ post.name }}</h2>
      </router-link>
    </div>
    <div class="profession">
      <h6>software developer</h6>
      <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#picupdate"
      >
        Edit
      </button>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <h5></h5>
        <h6>posts</h6>
      </div>
      <div>
        <h5>{{ followers }}</h5>
        <h6>followers</h6>
      </div>
      <div>
        <h5>{{ following }}</h5>
        <h6>following</h6>
      </div>
    </div>
    <div class="fullname">
      <h3>{{ post.fullName }}</h3>
    </div>
    <div class="description">
      <p>
        {{ post.bio }}
      </p>
    </div>

    <!-- Button trigger modal -->
    <div class="b">
      <button
        type="button"
        class="btn btn1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        create Post
      </button>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModal">update</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <create-post />
          </div>
        </div>
      </div>
    </div>
    <!--update modal dialog-->
    <div
      class="modal fade"
      id="picupdate"
      tabindex="-1"
      aria-labelledby="picupdate"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="picupdate">update</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <modal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import postService from "@/services/postService";
import modal from "@/components/modal";
import CreatePost from "./createPost.vue";
import loader from "@/components/loader.vue";

export default {
  components: {
    modal,
    CreatePost,
    loader,
  },
  data() {
    return {
      post: {},
      post_length: "",
      followers: "",
      following: "",
      loading: true,
    };
  },

  methods: {
    async getPosts() {
      try {
        await postService.me().then((response) => {
          this.post = response.data;
          this.post_length = response.data;
          this.followers = response.data.followers.length;
          this.following = response.data.followings.length;
          this.loading = false;
        });
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
  },
  async mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
.main {
  margin-top: 3em;
  position: stick;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fc466b;
}
.image,
.name,
.profession {
  text-align: center;
}
h2 {
  font-weight: 700;
  font-size: x-large;
  margin-top: 0.5em;
  text-transform: capitalize;
}
.btn {
  padding: 0 2em 0 2em;
  margin-top: 1em;
}
.d-flex {
  margin-top: 2em;
}
h5 {
  font-weight: 900;
  font-size: x-medium;
}
h6 {
  font-weight: 400;
  font-size: small;
}
.fullname {
  margin-top: 1.5em;
}
h3 {
  font-weight: 900;
  font-size: x-large;
  text-transform: capitalize;
}
a {
  color: #000;
  text-decoration: none;
}
.btn1 {
  background: #833ab4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  border: none;
  font-size: x-large;
  font-weight: 700;
}
.btn1:focus {
  outline: none;
  border: none;
}
@media only screen and (max-width: 576px) {
  .b {
    margin-bottom: 1em;
    text-align: center;
  }
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
}
</style>
