<template>
  <div class="main">
    <div class="title">
      <h2>user information</h2>
      <div class="info" v-for="item in items" :key="item.id">
        <h5 class="-title"><span> City :</span> {{ item.city }}</h5>
        <h5 class="-title"><span>From : </span> {{ item.country }}</h5>
        <h5 class="-title">
          <span> Relationship :</span> {{ item.relationship }}
        </h5>
        <p>
          hello this is extremely awesomehello this is extremely awesome hello
          this is extremely awesomev hello this is extremely awesome hello this
          is extremely awesome hello this is extremely awesome
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{ city: "osogbo", country: "Nigeria", relationship: "single" }],
    };
  },
};
</script>
<style scoped>
.main {
  margin-top: 13em;
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
