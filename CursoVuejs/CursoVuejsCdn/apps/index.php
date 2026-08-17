<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apps</title>

    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="./assets/css/style.css">

</head>

<body>
    <div id="miapp">
        <sharedMenu></sharedMenu>
        <router-view></router-view>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>
    <script src="https://unpkg.com/vuex@3.6.2/dist/vuex.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/CursoVuejs/CursoVuejsCdn/apps/store/store.js"></script>
    <script src="/CursoVuejs/CursoVuejsCdn/apps/services/services.js"></script>

    <script src="components/presupuestos/crearPresupuesto.js"></script>
    <script src="components/productos/productos.js"></script>
    <script src="components/productos/listProducts.js"></script>
    <script src="components/productos/editProducts.js"></script>

    <script src="components/shared/menu.js"></script>
    <script src="router/router.js"></script>

    <script type="text/javascript">
        var app = new Vue({
            el: '#miapp',
            router,
            store,
            data: {},
            created() {}
        })
    </script>

</body>

</html>