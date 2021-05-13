<template>
  <div class="container mt-3">
    <div class=" bg">
      <div class="image" >
        <img :src="item.pic" alt="" />
        <h2 class="title">{{item.email}}</h2>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <h5>45</h5>
          <h6>posts</h6>
        </div>
        <div>
          <h5>555</h5>
          <h6>followers</h6>
        </div>
        <div>
          <h5>44444</h5>
          <h6>following</h6>
        </div>
      </div>
    </div>

    <!-- Button trigger modal -->

    <div class="row ">
      <div class="  col-sm-12 col-md-8 col-lg-10 col-xl-9">
        <friendPost />
      </div>

      <div class="col-sm-12 col-md-4 col-lg-2 col-xl-3">
        <friendInfo />
        <friendFollower />
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import friendPost from "@/components/friendPost.vue";
import friendInfo from "@/components/friendInfo.vue";
import friendFollower from "@/components/friendFollower.vue";

export default {
  components: { friendPost, friendInfo, friendFollower },
  data() {
    return {
      _id: this.$route.params.id,
      item: {},
    };
  },
  methods: {
    async getuser() {
      try {
        await AuthenticationService.singleuser(this._id).then((response) => {
          this.item = response.data.user;

          console.log(response.data.user);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    // this.getReviews();
    this.getuser();
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
</style>
