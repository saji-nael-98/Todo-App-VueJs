import { createRouter, createWebHistory } from "vue-router";
import Tasks from "../pages/Tasks.vue";
import About from "../pages/About.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Tasks,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
