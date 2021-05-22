<template>
  <div class="container mt-3">
    <div class=" bg">
      <div class="image">
        <img :src="item.pic" alt="" />
        <h2 class="title">{{ item.fullName }}</h2>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <h5>{{ cnt }}</h5>
          <h6>posts</h6>
        </div>
        <div>
          <h5 v-if="item.followers">{{ item.followers.length }}</h5>
          <h6>followers</h6>
        </div>
        <div>
          <h5 v-if="item.followings">{{ item.followings.length }}</h5>
          <h6>following</h6>
        </div>
      </div>
    </div>

    <!-- Button trigger modal -->

    <div class="row ">
      <div class="  col-sm-12 col-md-8 col-lg-9 col-xl-9">
        <friendPost :items="items" />
      </div>

      <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3">
        <div class="main">
          <div v-if="$route.params.id != $store.state.user._id">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="follow()"
              v-if="!Following"
            >
              Follow +
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="unfollow()"
              v-else-if="Following"
            >
              Unfollow -
            </button>
          </div>
          <div class="title">
            <h2 class="H2">user information</h2>
            <div class="info">
              <h5 class="-title">
                <span class="SPAN"> City :</span> {{ item.city }}
              </h5>
              <h5 class="-title">
                <span class="SPAN">From : </span> {{ item.nationality }}
              </h5>
              <h5 class="-title">
                <span class="SPAN"> Relationship :</span> {{ item.status }}
              </h5>
              <p>
                {{ item.bio }}
              </p>
            </div>
          </div>
        </div>
        <friendFollower :followers="followers" />
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import { defineAsyncComponent } from "vue";
// Async component without options
const friendPost = defineAsyncComponent(() =>
  import("@/components/friendPost.vue")
);
const friendInfo = defineAsyncComponent(() =>
  import("@/components/friendInfo.vue")
);
const friendFollower = defineAsyncComponent(() =>
  import("@/components/friendFollower.vue")
);

import { mapState } from "vuex";

export default {
  components: { friendPost, friendInfo, friendFollower },
  data() {
    return {
      _id: this.$route.params.id,
      item: {},
      items: [],
      followers: [],
      cnt: "",
      Following: Boolean,
    };
  },
  methods: {
    async getuser() {
      try {
        await AuthenticationService.singleuser(this._id).then((response) => {
          this.item = response.data.user;
          this.items = response.data.posts;
          this.cnt = response.data.posts.length;
        });
      } catch (err) {
        console.log(err);
      }
    },
    async friends() {
      try {
        await AuthenticationService.friends(this._id).then((response) => {
          this.followers = response.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
    async follow() {
      try {
        this.Following = true;
        await AuthenticationService.follow(
          this.$store.state.user._id,
          this._id
        ).then((response) => {
          this.Following = true;

          this.$toast.success(response.data.message, {
            position: "top",
          });

          // this.$router.push({
          //   name: "Home",
          // });

          this.getuser();
          this.friends();
        });
        // console.log(this.id);
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top",
        });
      }
    },
    async unfollow() {
      try {
        this.Following = false;
        await AuthenticationService.unfollow(
          this.$store.state.user._id,
          this._id
        ).then((response) => {
          this.$toast.success(response.data, {
            position: "top",
          });

          this.getuser();
          this.friends();
        });
        // console.log(this.id);
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top",
        });
      }
    },
  },

  mounted() {
    // this.getReviews();
    this.getuser();
    this.friends();
  },
};
</script>
<style scoped>
.bg {
  background-image: url("https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg");
  height: 300px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
img {
  width: 200px;
  height: 200px;
  margin-top: 13em;
  border-radius: 50%;
  object-fit: cover;
}
.image {
  text-align: center;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 900;
  line-height: 1.2;
}

.d-flex {
  max-width: 40%;
  margin: 0 auto;
}
/**user info */
.main {
  margin-top: 16em;
}
.H2 {
  font-size: x-large;
  font-weight: 900;
}
.SPAN {
  font-weight: 600;
  margin-right: 0.5em;
}
p {
  text-align: justify;
  margin-top: 1em;
}
.display {
  display: none;
}
@media only screen and (max-width: 576px) {
  .container {
    max-width: 100%;
  }
  .bg {
    background-image: url("https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg");
    height: 150px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  img {
    width: 150px;
    height: 150px;
    margin-top: 5em;
    border-radius: 50%;
    object-fit: cover;
  }
  .d-flex {
    max-width: 100%;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .title {
    margin-top: 1em;
    font-weight: 700;
  }
  .main {
    margin-top: 2em;
  }
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
}
</style>
