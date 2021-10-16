
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
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/Error404.vue')
    }
  ]

  export default routes

