import axios from "axios";
import store from "@/store/index";

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_ROOT_URL,
    headers: {
      Authorization: `Bearer ${store.state.token}`,
    },
  });
};
