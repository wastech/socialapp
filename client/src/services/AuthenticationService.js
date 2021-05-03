import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("signup", credentials);
  },
  login(credentials) {
    return Api().post("signin", credentials);
  },
  user() {
    return Api().get("api/user");
  },
  update(update) {
    return Api().put("api/update", update);
  },
};
