import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Experiences from "../views/Experiences.vue";
import Skills from "../views/Skills.vue";
import goTo from "vuetify/es5/services/goto";
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
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },

  mode: "history",
  routes
});

export default router;
