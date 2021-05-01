<template>
  <div class="container">
    <div class=" bg">
      <div class="image">
        <img
          src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
          alt=""
        />
        <h2 class="title">aremu aremu</h2>
      </div>
    </div>
    <div class="row ">
      <div class="  col-sm-12 col-md-8 col-lg-10 col-xl-9">
        <userPost />
      </div>

      <div class="col-sm-12 col-md-4 col-lg-2 col-xl-3">
        <userInfo/>
        <userFriend/>

      </div>
    </div>
  </div>
</template>

<script>
import userPost from "@/components/userPost.vue";
import userInfo from "@/components/userInfo.vue";
import userFriend from "@/components/userFriend.vue";
export default {
  components: { userPost,userInfo,userFriend },
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
</style>
