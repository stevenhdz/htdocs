var routes = []

if (typeof presupuestos !== 'undefined') {routes.push({ path: '/presupuestos/', name: 'presupuestos', component: presupuestos })}

if (typeof listProducts !== 'undefined') {routes.push({ path: '/listProducts/', name: 'listProducts', component: listProducts })}
if (typeof productos !== 'undefined') {routes.push({ path: '/productos/', name: 'productos', component: productos })}
if (typeof editProducts !== 'undefined') {routes.push({ path: '/editProducts/:id', name: 'editProducts', component: editProducts })}

const router = new VueRouter({ routes })