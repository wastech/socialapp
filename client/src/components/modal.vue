<template>
  <div class="">
    <form action="">
      <div class="d-flex position-relative">
        <div class="col">
          <input
            class="form-control"
            id="formFileLg"
            type="file"
            ref="file"
            @change="onSelect()"
          />
        </div>
        <div class="d-grid">
          <button class="btn btn-primary" type="button" @click="onSubmit()">
            submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import postService from "@/services/postService";
export default {
  components: {},
  data() {
    return {
      file: "",
    };
  },
  methods: {
    // async getPosts() {
    //   try {
    //     await postService.user().then((response) => {
    //       this.post = response.data;
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async onSubmit() {
      try {
        let formData = new FormData();
        formData.append("pic", this.file);
        await postService.postpic(formData).then((response) => {
          this.$toast.success(response.data.message, {
            position: "top",
          });
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  // async mounted() {
  //   this.getPosts();
  // },
};
</script>

<style scoped>
img {
  width: 100px;
  border-radius: 100px;
  height: 100px;
}
</style>
