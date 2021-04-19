<template>
  <div class="">
    <div class="d-flex justify-content-between">
      <div class="__instagram">
        <div class=""><i class="fab fa-instagram"></i> <small>instagram</small></div>
        </div>
        <div class="searchBar">
           <div class=""><i class="fas fa-search"></i> <span>search</span></div>
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
small{
  margin-left: 0.5em;
}
.searchBar{
  margin-top: 2em;
    padding:8px 150px 10px 10px;
   background-color:#f4f9f9 ;
  font-size: x-large;
  border-radius: 5px;
}

</style>
