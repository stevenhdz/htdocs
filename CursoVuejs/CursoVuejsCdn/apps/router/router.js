var routes = []

routes.push({ path: '/presupuestos/', name: 'presupuestos', component: presupuestos })
routes.push({ path: '/listProducts/', name: 'listProducts', component: listProducts })
routes.push({ path: '/productos/', name: 'productos', component: productos })
routes.push({ path: '/editProducts/:id', name: 'editProducts', component: editProducts })

const router = new VueRouter({ routes })