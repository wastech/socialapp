<template>
  <div class="">
    <form action="">
      <div class="d-flex position-relative">
        <div v-if="!image">
          <p>Select an image</p>
          <input type="file" @change="onFileChange" />
        </div>

        <div v-else>
          <img :src="image" />
          <button @click="removeImage">Remove image</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  components: {},
  data() {
    return {
      image: "",
      item: {},
      post: {},
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    },
    async getPosts() {
      try {
        await AuthenticationService.user().then((response) => {
          this.post = response.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
    async save() {
      try {
        await AuthenticationService.update(this.item).then((response) => {
          this.$toast.success(response.data.message, {
            position: "top",
          });
          this.getPosts();
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
img {
  width: 100px;
  border-radius: 100px;
  height: 100px;
}
</style>
