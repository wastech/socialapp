<template>
  <div class="container mt-2">
    <div class="card1 mb-3">
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
            <div class="icons">
              <i
                class="fas fa-heart"
                :class="{ liked: item.likes }"
                @click="like()"
                v-if="item.likes"
                ><span class="badge ">{{ item.likes.length }}</span></i
              >

              <i class="fas fa-comment" v-if="item.comments"
                ><span class="badge ">{{ item.comments.length }}</span></i
              >
              <i class="fab fa-telegram-plane"></i>
            </div>
            <section>
              <h4 v-if="!comments.length" class="mt-4">
                Not Commented Yet
              </h4>
              <div class="scrollable">
                <!-- comment box-->

                <div
                  class=" bg-light d-flex position-relative"
                  v-for="comment in comments"
                  :key="comment.id"
                >
                  <div class="">
                    <img
                      :src="comment.postedBy.pic"
                      class="commentuser flex-shrink-0 me-3"
                      alt="..."
                    />
                  </div>
                  <div class="">
                    <h2 class="mt-0 comment__name">
                      {{ comment.postedBy.name }}
                    </h2>
                    <div>
                      <p class="comment__text">
                        {{ comment.text }}
                      </p>
                    </div>

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
      liked: Boolean,
    };
  },
  methods: {
    async getPost() {
      try {
        await postService.showpost(this._id).then((response) => {
          this.item = response.data.post;
          this.comments = response.data.post.comments;
        });
      } catch (err) {
        console.log(err);
      }
    },
    async like() {
      try {
        await postService
          .like(this._id, this.$store.state.user._id)
          .then((response) => {
            this.$toast.success(response.data.message, {
              position: "top",
            });
            this.getPost();
            this.liked = true;
          });
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top",
        });
      }
    },
    async onSubmit() {
      const comment = {
        id: this.item._id,
        text: this.text,
      };

      try {
        await postService.addcomment(comment).then((response) => {
          this.$toast.success(response.data.message, {
            position: "top",
          });
          this.getPost();
        });
      } catch (error) {
        this.$toast.error(error.response.data.error, {
          position: "top",
        });
        console.log(error);
      }
      this.text = "";
    },
  },
  async mounted() {
    this.getPost();
  },
};
</script>
<style scoped>
.liked {
  color: red;
}
.img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.card1 {
  -webkit-box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.68);
  max-width: 100%;
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
  height: 50vh;
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
.fas {
  margin: 0.5em 1em 0 0.5em;
}
.fas,
.fab {
  font-size: 1.5em;
  color: #d8e3e7;
}
.fa-heart {
  color: tomato;
}
.fa-comment {
  color: #000;
}
.badge {
  color: black;
}
@media only screen and (max-width: 576px) {
  .container {
    width: 100%;
  }
  .card1 {
  -webkit-box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.68);
  max-width: 100%;
  width: 100%;
  text-align: justify;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 0 auto;
}
  .img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
  .comment__text {
    max-width: 70%;

    margin-top: 0.3em;
    text-align: justify;
  }
  .scrollable {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: justify;
    height: 100%;
    margin-top: 1.5em;
  }

  .fas,
  .fab {
    font-size: 1em;
    color: #d8e3e7;
  }
  .fa-heart {
    color: tomato;
  }
  .fa-comment {
    color: #000;
  }
  .comment__name {
    font-size: small;

    margin-top: 3em;
  }
  .bg-light {
    margin-bottom: 1em;
  }
}
@media only screen and (min-width: 768px) {
  .img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  .card1 {
  -webkit-box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.68);
  max-width: 100%;
  width: 100%;
  text-align: justify;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 0 auto;
}
  .scrollable {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: justify;
    height: 100%;
    margin-top: 1.5em;
  }
  .bg-light {
    margin-bottom: 1em;
  }
}
@media only screen and (min-width: 992px) {
  .img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  .card1 {
  -webkit-box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.68);
  max-width: 100%;
  width: 100%;
  text-align: justify;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 0 auto;
}
  .scrollable {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: justify;
    height: 50vh;
  }
  .container {
    margin-top: 4em;
  }
}
</style>
