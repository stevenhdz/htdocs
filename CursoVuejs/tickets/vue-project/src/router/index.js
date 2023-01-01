import { createRouter, createWebHistory } from "vue-router";
import TicketView from "../views/TicketView.vue";
import TicketShop from "../views/TicketShop.vue";
import TicketComplete from "../views/TicketComplete.vue";
import TicketPay from "../views/TicketPay.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/shop/:event",
      name: "shop",
      component: TicketShop,
    },
    {
      path: "/",
      name: "ticket",
      component: TicketView,
    },
    {
      path: "/shop/complete/:event/:pay/:count",
      name: "complete",
      component: TicketComplete,
    },
    {
      path: "/pay",
      name: "pay",
      component: TicketPay,
    }
  ],
});

export default router;
