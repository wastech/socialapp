<template>
  <div class="">
    <form action="">
      <div class="mb-3">
        <img
          src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
          alt=""
        />

        <textarea
          id="exampleFormControlTextarea1"
          placeholder="what's in your mind? && click on photo icon to select the image"
          rows="4"
          v-model="body"
        ></textarea>
      </div>
      <section>
        <div class="icons">
          <div class="d-flex justify-content-between">
            <div>
              <input
                id="fileUpload"
                type="file"
                ref="file"
                @change="onSelect()"
                hidden
              />
              <span
                type="file"
                class="material-icons tomato"
                @click="chooseFiles()"
              >
                perm_media
              </span>
            </div>

            <div>
              <span class="material-icons blue">
                label
              </span>
            </div>
            <div>
              <span class="material-icons green">
                room
              </span>
            </div>
            <div>
              <span class="material-icons gold">
                sentiment_very_satisfied
              </span>
            </div>
            <div>
              <button type="button" class="btn btn-success" @click="onSubmit()">
                Share
              </button>
            </div>
          </div>
        </div>
      </section>
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
      body: "",
    };
  },
  methods: {
    chooseFiles: function() {
      document.getElementById("fileUpload").click();
    },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async onSubmit() {
      try {
        let formData = new FormData();
        formData.append("photo", this.file);
        formData.append("body", this.body);
        await postService.createPost(formData).then((response) => {
          this.$toast.success(response.data.message, {
            position: "top",
          });
          this.$router.push({
            name: "Home",
          });
        });
      } catch (error) {
        this.$toast.error(error.response.data.error, {
          position: "top",
        });
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.6em;
  margin-top: 0.4em;
  margin-left: 0.5em;
}
form {
  -webkit-box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.68);

  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
}
textarea {
  width: 70%;
  height: 30px;
  border: none;
  margin-top: 0.8em;
  margin-left: 0.5em;
}
b {
  margin-top: -3em;
}
textarea:focus {
  outline: none;
}
.icons {
  border-top: 2px solid #ccc;
  padding: 1em;
}
.tomato {
  color: tomato;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
.gold {
  color: gold;
}
</style>
