import axios from "axios";
import store from "@/store/index";

export default () => {
  return axios.create({
    baseURL: "/",
    headers: {
      Authorization: `Bearer ${store.state.token}`,
    },
  });
};
