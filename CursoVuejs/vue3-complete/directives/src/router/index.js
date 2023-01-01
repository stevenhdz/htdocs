import { createRouter, createWebHistory } from "vue-router";
import Directives from "../views/Directives.vue";
import Props from "../views/Props.vue";
import Form from "../views/Form.vue";
import Storage from "../views/Storage.vue";
import Sass from "../views/Sass.vue";
import Composition from "../views/Composition.vue";
import Lifecyclehooks from "../views/Lifecyclehooks.vue";
import Store from "../views/Store.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/directives",
      name: "Directives",
      component: Directives,
    },
    {
      path: "/form",
      name: "Form",
      component: Form,
    },
    {
      path: "/storage",
      name: "Storage",
      component: Storage,
    },
    {
      path: "/sass",
      name: "Sass",
      component: Sass,
    },
    {
      path: "/props",
      name: "Props",
      component: Props,
    },
    {
      path: "/composition",
      name: "Composition",
      component: Composition,
    },
    {
      path: "/lifecyclehooks",
      name: "Lifecyclehooks",
      component: Lifecyclehooks,
    },
    {
      path: "/store",
      name: "Store",
      component: Store,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../components/404.vue"),
    },
    {
      path: "/:id/:id",
      name: "get",
      component: () => import("../components/Get.vue"),
    },
  ],
});

export default router;
