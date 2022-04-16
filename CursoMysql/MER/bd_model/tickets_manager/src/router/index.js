import { createRouter, createWebHistory } from "vue-router";
import Usuario from "../views/Usuario.vue";
import Rol from "../views/Rol.vue";
import Tipo from "../views/Tipo.vue";
import Prioridad from "../views/Prioridad.vue";
import Categoria from "../views/Categoria.vue";
import Estado from "../views/Estado.vue";
import Comentario from "../views/Comentario.vue";
import Proyecto from "../views/Proyecto.vue";
import Ticket from "../views/Ticket.vue";
import Modelo from "../views/Modelo.vue";
import Marca from "../views/Marca.vue";
import Tipopc from "../views/Tipopc.vue";
import Estadoenvio from "../views/Estadoenvio.vue";
import Asignacion from "../views/Asignacion.vue";
import Stock from "../views/Stock.vue";

const routes = [
  {
    path: "/usuario",
    name: "Usuario",
    component: Usuario,
  },
  {
    path: "/crear/usuario",
    name: "creacionusuario",
    component: () => import("../components/users/create.vue"),
  },
  {
    path: "/editar/usuario/:id",
    name: "editarusuario",
    component: () => import("../components/users/edit.vue"),
  },
  {
    path: "/rol",
    name: "Rol",
    component: Rol,
  },
  {
    path: "/crear/rol",
    name: "creacionrol",
    component: () => import("../components/rol/create.vue"),
  },
  {
    path: "/editar/rol/:id",
    name: "editarrol",
    component: () => import("../components/rol/edit.vue"),
  },
  {
    path: "/tipo",
    name: "Tipo",
    component: Tipo,
  },
  {
    path: "/crear/tipo",
    name: "creaciontipo",
    component: () => import("../components/tipos/create.vue"),
  },
  {
    path: "/editar/tipo/:id",
    name: "editartipo",
    component: () => import("../components/tipos/edit.vue"),
  },
  {
    path: "/prioridad",
    name: "Prioridad",
    component: Prioridad,
  },
  {
    path: "/crear/prioridad",
    name: "creacionprioridad",
    component: () => import("../components/prioridad/create.vue"),
  },
  {
    path: "/editar/prioridad/:id",
    name: "editarprioridad",
    component: () => import("../components/prioridad/edit.vue"),
  },
  {
    path: "/categoria",
    name: "Categoria",
    component: Categoria,
  },
  {
    path: "/crear/categoria",
    name: "creacioncategoria",
    component: () => import("../components/categoria/create.vue"),
  },
  {
    path: "/editar/categoria/:id",
    name: "editarcategoria",
    component: () => import("../components/categoria/edit.vue"),
  },
  {
    path: "/estado",
    name: "Estado",
    component: Estado,
  },
  {
    path: "/crear/estado",
    name: "creacionestado",
    component: () => import("../components/estado/create.vue"),
  },
  {
    path: "/editar/estado/:id",
    name: "editarestado",
    component: () => import("../components/estado/edit.vue"),
  },
  {
    path: "/comentario",
    name: "Comentario",
    component: Comentario,
  },
  {
    path: "/crear/comentario",
    name: "creacioncomentario",
    component: () => import("../components/comentario/create.vue"),
  },
  {
    path: "/editar/comentario/:id",
    name: "editarcomentario",
    component: () => import("../components/comentario/edit.vue"),
  },
  {
    path: "/proyecto",
    name: "Proyecto",
    component: Proyecto,
  },
  {
    path: "/crear/proyecto",
    name: "creacionproyecto",
     component: () => import("../components/proyecto/create.vue"),
  },
  {
    path: "/editar/proyecto/:id",
    name: "editarproyecto",
     component: () => import("../components/proyecto/edit.vue"),
  },
  {
    path: "/ticket",
    name: "Ticket",
    component: Ticket,
  },
  {
    path: "/crear/ticket",
    name: "creacionticket",
     component: () => import("../components/ticket/create.vue"),
  },
  {
    path: "/editar/ticket/:id",
    name: "editarticket",
     component: () => import("../components/ticket/edit.vue"),
  },
  {
    path: "/modelo",
    name: "Modelo",
    component: Modelo,
  },
  {
    path: "/crear/modelo",
    name: "creacionmodelo",
     component: () => import("../components/modelo/create.vue"),
  },
  {
    path: "/editar/modelo/:id",
    name: "editarmodelo",
     component: () => import("../components/modelo/edit.vue"),
  },
  {
    path: "/marca",
    name: "Marca",
    component: Marca,
  },
  {
    path: "/crear/marca",
    name: "creacionmarca",
     component: () => import("../components/marca/create.vue"),
  },
  {
    path: "/editar/marca/:id",
    name: "editarmarca",
     component: () => import("../components/marca/edit.vue"),
  },
  {
    path: "/tipopc",
    name: "Tipopc",
    component: Tipopc,
  },
  {
    path: "/crear/tipopc",
    name: "creaciontipopc",
     component: () => import("../components/tipopc/create.vue"),
  },
  {
    path: "/editar/tipopc/:id",
    name: "editartipopc",
     component: () => import("../components/tipopc/edit.vue"),
  },
  {
    path: "/estadoenvio",
    name: "Estadoenvio",
    component: Estadoenvio,
  },
  {
    path: "/crear/estadoenvio",
    name: "creacionestadoenvio",
     component: () => import("../components/estadoenvio/create.vue"),
  },
  {
    path: "/editar/estadoenvio/:id",
    name: "editarestadoenvio",
     component: () => import("../components/estadoenvio/edit.vue"),
  },
  {
    path: "/asignacion",
    name: "Asignacion",
    component: Asignacion,
  },
  {
    path: "/crear/asignacion",
    name: "creacionasignacion",
     component: () => import("../components/asignacion/create.vue"),
  },
  {
    path: "/editar/asignacion/:id",
    name: "editarasignacion",
     component: () => import("../components/asignacion/edit.vue"),
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },
  {
    path: "/crear/stock",
    name: "creacionstock",
     component: () => import("../components/stock/create.vue"),
  },
  {
    path: "/editar/stock/:id",
    name: "editarstock",
     component: () => import("../components/stock/edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
