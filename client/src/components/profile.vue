<template>
  <div class="main">
    <div class="image">
      <img
        src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
        alt=""
      />
    </div>
    <div class="name">
      <h2>aremu aremu</h2>
    </div>
    <div class="profession">
      <h6>software developer</h6>
      <button type="button" class="btn btn-dark">Edit</button>
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
    <div class="fullname">
      <h3>aremu aremu</h3>
    </div>
    <div class="description">
      <p>
        hello this is extremely awesomehello this is extremely awesome hello
        this is extremely awesomev hello this is extremely awesome hello this is
        extremely awesome hello this is extremely awesome
      </p>
    </div>

    <section>
      <story />
    </section>
    <div class="d-grid gap-2">
      <button type="button" class="btn1 ">Create Post</button>
    </div>
  </div>
</template>
<script>
import story from "@/components/story";

export default {
  components: {
    story,
  },
};
</script>

<style scoped>
.main {
  margin-top: 9.7em;
  position: stick;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fc466b;
}
.image,
.name,
.profession {
  text-align: center;
}
h2 {
  font-weight: 700;
  font-size: x-large;
  margin-top: 0.5em;
  text-transform: capitalize;
}
.btn {
  padding: 0 2em 0 2em;
  margin-top: 1em;
}
.d-flex {
  margin-top: 2em;
}
h5 {
  font-weight: 900;
  font-size: x-medium;
}
h6 {
  font-weight: 400;
  font-size: small;
}
.fullname {
  margin-top: 1.5em;
}
h3 {
  font-weight: 900;
  font-size: x-large;
  text-transform: capitalize;
}
.btn1 {
  background: #833ab4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  border: none;
  font-size: x-large;
  font-weight: 700;
}
</style>
