import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile.vue"),
  },

  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/signUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/p/:id",
    name: "showuser",
    component: () => import("../views/friendProfile.vue"),
  },
  {
    path: "/singlepost/:id",
    name: "singlepost",
    component: () => import("../views/singlepost.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
