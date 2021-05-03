<template>
  <div class="main">
    <div class="image">
      <img
        src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
        alt=""
      />
    </div>
    <div class="name">
      <h2>{{ post.name }}</h2>
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
        <h5>45</h5>
        <h6>posts</h6>
      </div>
      <div>
        <h5>{{ post.followers }}</h5>
        <h6>followers</h6>
      </div>
      <div>
        <h5>44444</h5>
        <h6>following</h6>
      </div>
    </div>
    <div class="fullname">
      <h3>aremu aremu</h3>
    </div>
    <div class="description">
      <p>
        hello this is extremely awesomehello this is extremely awesome hello
        this is extremely awesomev hello this is extremely awesome hello this is
        extremely awesome hello this is extremely awesome
      </p>
    </div>

    <section>
      <story />
    </section>
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
    <!-- Modal -->
    <div
      class="modal fade"
      id="picupdate"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">update</h5>
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
import story from "@/components/story";
import AuthenticationService from "@/services/AuthenticationService";
import modal from "@/components/modal";

export default {
  components: {
    story,
    modal,
  },
  data() {
    return {
      post: {},
    };
  },

  methods: {
    async getPosts() {
      try {
        await AuthenticationService.user().then((response) => {
          this.post = response.data;
          console.log("respose", response.data);
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
.main {
  margin-top: 9.7em;
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
</style>
