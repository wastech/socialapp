import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("signup", credentials);
  },
  login(credentials) {
    return Api().post("signin", credentials);
  },
  user() {
    return Api().get("me");
  },
  update(update) {
    return Api().put("updatepic", update);
  },
  singleuser(postId) {
    return Api().get(`user/${postId}`);
  },
};
