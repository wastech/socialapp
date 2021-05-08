import Api from "@/services/Api";

export default {
  mypost() {
    return Api().get("me");
  },
  postpic(update) {
    return Api().put("updatepic", update);
  },
};
