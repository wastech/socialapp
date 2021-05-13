import Api from "@/services/Api";

export default {
  me() {
    return Api().get("me");
  },
  postpic(update) {
    return Api().put("updatepic", update);
  },
  createPost(post) {
    return Api().post("createpost", post);
  },
  addcomment(comment) {
    return Api().put("comment", comment);
  },
  allpost() {
    return Api().get("allpost");
  },
  mypost() {
    return Api().get("mypost");
  },
  showpost(postId) {
    return Api().get(`post/${postId}`);
  },
};
