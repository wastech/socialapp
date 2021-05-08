<template>
  <div class="main">
    <div class="title">
      <h2>user information</h2>
      <div class="info">
        <h5 class="-title"><span> City :</span> {{ post.city }}</h5>
        <h5 class="-title"><span>From : </span> {{ post.nationality }}</h5>
        <h5 class="-title">
          <span> Relationship :</span> {{ post.status }}
        </h5>
        <p>
          {{ post.bio }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.main {
  margin-top: 2em;
}
h2 {
  font-size: x-large;
  font-weight: 900;
  text-transform: capitalize;
}
span {
  font-weight: 600;
  margin-right: 0.5em;
}
p {
  text-align: justify;
  margin-top: 1em;
}
</style>
