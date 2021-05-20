import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      requiresAuth: true,
    },
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      requiresAuth: true,
    },
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
    meta: {
      requiresAuth: true,
    },
    component: () => import("../views/friendProfile.vue"),
  },
  {
    path: "/singlepost/:id",
    name: "singlepost",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../views/singlepost.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.isUserLoggedIn) {
      const loginpath = window.location.pathname;
      next({ name: "login", query: { from: loginpath } });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.state.isUserLoggedIn) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
