import Api from "@/services/Api";

export default {
  mypost() {
    return Api().get("me");
  },
  update(update) {
    return Api().put("updatepic", update);
  },
};
