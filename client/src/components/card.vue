<template>
  <div class="container">
    <div class="row mt-5">
      <div
        class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4"
        v-for="item in items"
        :key="item._id"
      >
        <div class="card">
          <div class="d-flex position-relative">
            <img :src="item.topImage" class="flex-shrink-0 me-3" alt="..." />
            <div>
              <h5 class="">{{ item.name }}</h5>
              <p class="name">{{ item.add }}</p>
            </div>
          </div>
          <img :src="item.pic" class="card-img-top" alt="..." />
          <div class="icons">
            <i class="fas fa-heart"></i>
            <i class="fas fa-comment"></i>
            <i class="fab fa-telegram-plane"></i>
          </div>
          <div class="card-body">
            <span class="card-title"
              >liked by <b>{{ item.liked }}and {{ item.total }} others</b>
            </span>
            <blockquote class="card-text">
              <q> {{ item.title }}</q>
              <br />
              <small class="text-muted">{{ item.updated }}</small>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
      ],
    };
  },
};
</script>

<style scoped>
.flex-shrink-0 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 1em;
  margin-left: 1em;
  object-fit: cover;
}
h5 {
  margin-top: 1em;
}
.name {
  text-align: left;
  margin-top: -8px;
  font-weight: 600;
}
.fas {
  margin: 0.5em 1em 0 0.5em;
}
.fas,
.fab {
  font-size: large;
}
.card-title {
  margin-top: 0;
}
small {
  margin-top: -20px;
  color: red;
}
.card-img-top {
  width: 100%;
  height: 150px;
  border-radius: 1em;
  object-fit: cover;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 2em;
}
q {
  font-weight: 700;
  font-size: medium;
}
.card-body {
  margin-top: -13px;
}
</style>
