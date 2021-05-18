<template>
  <section>
    <div class="title">
      <h2>your Friends</h2>
    </div>
    <div class="row">
      <div
        class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
        v-for="item in follows"
        :key="item.id"
      >
        <div class="">
          <img :src="item.pic"  alt="..." />
          <div class="body">
            <h5 class="-title">{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props:["follows"],
  data() {
    return {
      
    };
  },
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
p {
  font-size: small;
}
h2 {
  font-weight: 700;
  font-size: x-large;
  margin-top: 1em;
  margin-bottom: 1em;
}
h5{
 margin-top: .5em;
}
.col-xl-4{
  margin-bottom: 1em;
}
</style>
