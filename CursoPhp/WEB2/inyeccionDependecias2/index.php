<?php

use FastRoute\RouteCollector;

$container = require __DIR__ . "/app/bootstrap.php";

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $route){
    $route->addRoute("GET", "/", ['Comercial\Controllers\HomeController', 'index']);
    $route->addRoute("GET", "/clientes", ['Comercial\Controllers\HomeController', 'obtenerClientes']);
    $route->addRoute("GET", "/cliente/{id}", ['Comercial\Controllers\HomeController', 'obtenerCliente']);
    $route->addRoute("GET", "/delete/cliente/{id}", ['Comercial\Controllers\HomeController', 'eliminarCliente']);
});

$route = $dispatcher->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);

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