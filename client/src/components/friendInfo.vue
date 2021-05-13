<template>
  <div class="main">
    <button type="button" class="btn btn-primary btn-sm">Follow +</button>
    <button type="button" class="btn btn-primary btn-sm">Unfollow -</button>
    <div class="title">
      <h2>user information</h2>
      <div class="info">
        <h5 class="-title"><span> City :</span> {{ item.city }}</h5>
        <h5 class="-title"><span>From : </span> {{ item.nationality }}</h5>
        <h5 class="-title"><span> Relationship :</span> {{ item.status }}</h5>
        <p>
          {{ item.bio }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.main {
  margin-top: 16em;
}
h2 {
  font-size: x-large;
  font-weight: 900;
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
