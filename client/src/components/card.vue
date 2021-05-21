<template functional>
  <div class="container">
    <div class="row mt-5">
      <div
        class="col-sm-12  col-xs-12 col-md-6 col-lg-6 col-xl-4 mb-4"
        v-for="item in items"
        :key="item._id"
      >
        <div class="card">
          <div class="d-flex position-relative">
            <div v-if="item.postedBy">
              <img
                :src="item.postedBy.pic"
                class="flex-shrink-0 me-3"
                alt="..."
                loading="lazy"
              />
            </div>

            <div>
              <div v-if="item.postedBy">
                <router-link
                  v-bind:to="{
                    name: 'showuser',
                    params: { id: item.postedBy._id },
                  }"
                >
                  <h5 class="">{{ item.postedBy.name }}</h5>
                </router-link>
                <p class="name">
                  {{ item.postedBy.nationality }}, {{ item.postedBy.city }}
                </p>
              </div>
            </div>
          </div>
          <router-link
            v-bind:to="{
              name: 'singlepost',
              params: { id: item._id },
            }"
          >
            <img :src="item.photo" class="card-img-top" alt="..." />
            <div class="icons">
              <i class="fas fa-heart" v-if="item.likes">
                <span class="badge "> {{ item.likes.length }}</span></i
              >
              <i class="fas fa-comment" v-if="item.likes"
                ><span class="badge "> {{ item.comments.length }}</span></i
              >
              <i class="fab fa-telegram-plane"></i>
            </div>
            <div class="card-body">
              <blockquote class="card-text">
                <q> {{ item.body }} </q>
                <br />
                <small class="text-muted">{{
                  moment(item.createdAt).fromNow()
                }}</small>
              </blockquote>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["items"],

  data() {
    return {};
  },
  // mathods: {
  //   dateTime(value) {
  //     return moment(value).format("dddd");
  //   },
  // },

  created: function() {
    this.moment = moment;
  },
};
</script>

<style scoped>
.flex-shrink-0 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
  object-fit: cover;
}
h5 {
  margin-top: 1em;
  font-weight: 900;
  font-size: large;
}
.name {
  text-align: left;
  margin-top: -8px;
  font-weight: 700;
  font-size: x-small;
}
.fas {
  margin: 0.5em 1em 0 0.5em;
}
.fas,
.fab {
  font-size: large;
  color: #d8e3e7;
}
b {
  font-size: x-medium;
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
.fa-heart{
  color: tomato;
}
.card-body {
  margin-top: -13px;
}
a {
  color: #000;
  text-decoration: none;
}
.badge {
  color: #000;
}
.fa-comment{
  color: #000;
}

</style>
