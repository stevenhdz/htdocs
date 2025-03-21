
  const routes = [
    {
      path: '/',
      component: () => import('layouts/Login.vue')
    },
    {

      path: '/index',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '/investigadores', component: () => import('pages/Investigadores.vue') },
        { path: '/roles', component: () => import('pages/Roles.vue') },
        { path: '/facultades', component: () => import('pages/Facultades.vue') },
        { path: '/clasificacionRevistas', component: () => import('pages/clasificacionRevistas.vue') },
        { path: '/departamentosInvestigaciones', component: () => import('pages/departamentosInvestigaciones.vue') },
        { path: '/GrupoInvestigacion', component: () => import('pages/GrupoInvestigacion.vue') },
        { path: '/InvestigadoresProyecto', component: () => import('pages/InvestigadoresProyecto.vue') },
        { path: '/Revista', component: () => import('pages/Revista.vue') },
        { path: '/Programa', component: () => import('pages/Programa.vue') },
        
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/Error404.vue')
    }
  ]

  export default routes

