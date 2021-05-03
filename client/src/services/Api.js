import axios from "axios";
import store from "@/store/index";

export default () => {
  return axios.create({
    baseURL: `http://localhost:5000/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`,
    },
  });
};
