import { createRouter, createWebHistory } from "vue-router";
import Main from "@/components/Main.vue";
import Cases from "@/components/Cases.vue";
import Cards from "@/components/Cards.vue";
import Wheel from "@/components/Wheel.vue";
import four from "@/components/404.vue";
import { faHourglass2 } from "@fortawesome/free-solid-svg-icons";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Main,
  },
  {
    name: "Cases",
    path: "/cases",
    component: Cases,
  },
  {
    name: "Wheel",
    path: "/wheel",
    component: Wheel,
  },
  {
    name: "Cards",
    path: "/cards",
    component: Cards,
  },
  {
    name: "404",
    path: "/notfound",
    component: four,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
