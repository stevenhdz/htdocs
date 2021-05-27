
const routes = [
  {
    path: '/',
    name: 'Menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Principal', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('pages/Index.vue'),
  }
]

export default routes
