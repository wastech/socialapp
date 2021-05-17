<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="__instagram">
        <div class="">
          <i class="fab fa-instagram"></i> <small>Wastech</small>
        </div>
      </div>
      <div class="searchBar">
        <div data-bs-toggle="modal" data-bs-target="#exampleModal1">
          <i class="fas fa-search"></i> <span>search</span>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">search for users</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <section>
              <h6>fataiwasiu@gamil.com</h6>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.__instagram {
  margin-top: 1em;
  font-weight: 700;
  font-size: xx-large;
}
small {
  margin-left: 0.5em;
}
.searchBar {
  margin-top: 2em;
  padding: 8px 150px 10px 10px;
  background-color: #f4f9f9;
  font-size: x-large;
  border-radius: 5px;
}
h6 {
  margin-top: 1em;
  font-weight: 700;
  font-size: x-medium;
}
</style>
