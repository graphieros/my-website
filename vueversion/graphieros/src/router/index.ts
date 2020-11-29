import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Glyphes from "../views/Glyphes.vue";
import Key from "../views/Key.vue";
import Editor from "../views/Editor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/key",
    name: "la Clé",
    component: Key
  },
  {
    path: "/editor",
    name: "editor",
    component: Editor
  },
  {
    path: "/glyphes",
    name: "Glyphes",
    component: Glyphes
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //  import(/* webpackChunkName: "about" */ "../views/Glyphes.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
