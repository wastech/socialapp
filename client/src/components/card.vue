<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div class="card">
          <div class="d-flex position-relative">
            <img
              src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
              class="flex-shrink-0 me-3"
              alt="..."
            />
            <div>
              <h5 class="">Custom component</h5>
              <p class="name">mumbai, india</p>
            </div>
          </div>
          <img
            src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="icons">
            <i class="fas fa-heart"></i>
            <i class="fas fa-comment"></i>
            <i class="fab fa-telegram-plane"></i>
          </div>
          <div class="card-body">
            <span class="card-title">liked by <b>aremu and 20 others</b> </span>
            <blockquote class="card-text">
              <q> Some quick example text to</q>
              <br />
              <small class="text-muted">Last updated 3 mins ago</small>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
