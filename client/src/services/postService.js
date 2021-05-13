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
  allpost() {
    return Api().get("allpost");
  },
  mypost() {
    return Api().get("mypost");
  },
 
};
