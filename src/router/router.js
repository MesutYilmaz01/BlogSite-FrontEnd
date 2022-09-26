import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/Index/Index.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact/Index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About/Index.vue"),
  },
  {
    path: "/category/:category",
    name: "category",
    component: () => import("@/views/Category/Index.vue"),
  },
  {
    path: "/blog/:slug",
    name: "blog",
    component: () => import("@/views/Blog/Index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;