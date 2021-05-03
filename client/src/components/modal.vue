<template>
  <div class="">
    <form action="">
      <div class="col">
        <input
          class="form-control"
          id="formFileLg"
          type="file"
          ref="file"
          @change="onSelect()"
        />
      </div>
      <button class="btn" @click="onSubmit()"></button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      file: "",
    };
  },
  created() {
    this.fetchTasks();
  },

  methods: {
    fetchTasks() {
     
     
    },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("pic", this.file);

      axios
        .post("https://naijanews.herokuapp.com/api/news", formData)
        .then(() => {
          console.log("Successfully created new user");
          // this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          this.error = err.response.data.err;
        });
    },
  },
};
</script>

<style scoped></style>
