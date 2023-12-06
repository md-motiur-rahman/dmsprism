import HomeComponent from "./components/HomeComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
