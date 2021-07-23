import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/work",
    name: "Work",
    meta: {
      title: "Work",
    },
    component: () => import("../views/Work.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
    },
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Raúl Rivadeneyra`;
  next();
});

export default router;
