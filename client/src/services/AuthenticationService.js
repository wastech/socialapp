import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("signup", credentials);
  },
  query(query) {
    return Api().post("search-users", query);
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
  friends(userId) {
    return Api().get(`friends/${userId}`);
  },
  follow(data, userId) {
    return Api().put(`${data}/follow`, {
      userId,
    });
  },
  unfollow(data, userId) {
    return Api().put(`${data}/unfollow`, {
      userId,
    });
  },

  // follow(follow) {
  //   return Api().put("follow", follow);
  // },
};
