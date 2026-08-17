<?php

use FastRoute\RouteCollector;

$container = require __DIR__ . "/app/bootstrap.php";

// echo "<pre>";
// var_dump($containerBuilder);

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $route){
    $route->addRoute("GET", "/", ['Almacen\Controllers\HomeController', 'index']);
    $route->addRoute("GET", "/articulos", ['Almacen\Controllers\HomeController', 'obtenerArticulos']);
    $route->addRoute("GET", "/articulo/{id}", ['Almacen\Controllers\HomeController', 'obtenerArticulo']);
});

$route = $dispatcher->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
//var_dump($route);

switch ($route[0]) {
    case FastRoute\Dispatcher::NOT_FOUND: 
        echo "404 Not found !";
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        echo "405 Not allowed !";
        break;
    case \FastRoute\Dispatcher::FOUND:
        $controller = $route[1];
        $parameters = $route[2];
        $container->call($controller, $parameters);
        break;
}