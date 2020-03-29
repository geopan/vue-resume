import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Experiences from "../views/Experiences.vue";
import Skills from "../views/Skills.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/experiences",
    name: "experiences",
    component: Experiences
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
