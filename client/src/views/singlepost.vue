<template>
  <div class="container mt-2">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-12 col-xl-4 col-lg-6 col-sm-7 col-xs-12">
          <img :src="item.photo" alt="..." class="img" />
        </div>
        <div class="col-md-12 col-xl-8 col-lg-6 col-sm-12 col-xs-12">
          <div class="card-body">
            <div class="d-flex position-relative" v-if="item.postedBy">
              <img
                :src="item.postedBy.pic"
                class="flex-shrink-0 me-3"
                alt="..."
              />
              <div>
                <h2 class="mt-0">{{ item.postedBy.name }}</h2>
              </div>
            </div>
            <p>
              {{ item.body }}
            </p>
            <section>
              <div class="scrollable">
                <!-- comment box-->
                <div
                  class="row g-0 bg-light position-relative"
                  v-for="comment in comments"
                  :key="comment.id"
                >
                  <div class="col-md-2 mb-md-0 p-md-4">
                    <img :src="comment.postedBy.pic" class="commentuser" alt="..." />
                  </div>
                  <div class="col-md-6 p-2 ps-md-0">
                    <h2 class="mt-0">{{ comment.postedBy.name }}</h2>
                    <p>
                     {{comment.text}}
                    </p>
                    <small class="card-footer text-muted">
                     1 minute ago
                    </small>
                  </div>
                </div>
              </div>
              <div class="comment-box">
                <div class="row mt-5">
                  <div class="col-8">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        v-model="text"
                        rows="2"
                      ></textarea>
                      <label for="floatingTextarea2">Comments</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="onSubmit()"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import postService from "@/services/postService";

export default {
  data() {
    return {
      _id: this.$route.params.id,
      item: {},
      text: "",
      comments: [],
    };
  },
  methods: {
    async getPost() {
      try {
        await postService.showpost(this._id).then((response) => {
          this.item = response.data.post;
          this.comments = response.data.post.comments;

          console.log(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    },
    async onSubmit() {
      const comment = {
        id: this.item._id,
        text: this.text,
      };

      try {
        await postService.addcomment(comment).then((response) => {
          console.log("this is response", response);
          this.$toast.success(response.data.message, {
            position: "top",
          });
          // this.$router.push({
          //   name: "Home",
          // });
          this.getPost();
        });
        console.log(response.data);
      } catch (error) {
        this.$toast.error(error.response.data.error, {
          position: "top",
        });
        console.log(error);
      }
    },
  },
  async mounted() {
    // this.getReviews();
    this.getPost();
  },
};
</script>
<style scoped>
.img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.card {
  -webkit-box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.68);
  max-width: 80%;
  width: 100%;
  text-align: justify;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 0 auto;
}
.container {
  text-align: center;
}
.flex-shrink-0 {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5em;
}
.d-flex {
  border-bottom: 1px solid #ccc;
}
h2 {
  font-size: large;
  font-weight: 700;
}
.scrollable {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  height: 40vh;
}
.commentuser {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
.textarea {
  border-color: none;
}

.form-control {
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: none;

  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: none;
  outline: 0;
  box-shadow: none;
}
.comment-box {
  border-top: 1px solid #ccc;
}
</style>
