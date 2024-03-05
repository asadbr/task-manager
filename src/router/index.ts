import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("@/pages/TasksPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
