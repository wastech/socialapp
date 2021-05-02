<template>
  <section>
    <div class="title">
      <h2>your story</h2>
    </div>
    <div class="row">
      <div
        class="col-sm-6 col-xs-6 col-md-6 col-lg-6 col-xl-3"
        v-for="item in items"
        :key="item.id"
      >
        <div class="">
          <img :src="item.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          image:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "aremu",
        },
        {
          image:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "google",
        },
        {
          image:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "awesome",
        },
        {
          image:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "goog ",
        },
      ],
    };
  },
};
</script>
<style scoped>
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
p {
  font-size: small;
}
h2 {
  font-weight: 700;
  font-size: x-large;
  margin-top: 2em;
  margin-bottom: 1em;
}
</style>
