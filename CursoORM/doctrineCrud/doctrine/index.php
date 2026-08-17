<?php

$container = require __DIR__ . "/app/bootstrap.php";

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $route){
    $route->addRoute("GET", "/", ['App\Controllers\HomeController', 'index']);
    $route->addRoute(["GET","POST"], "/libros/insert", ['App\Controllers\HomeController', 'insert']);
    $route->addRoute(["GET","POST"], "/libros/delete", ['App\Controllers\HomeController','deleteOnes']);
    $route->addRoute("GET", "/libros", ['App\Controllers\HomeController','findAll']);
    $route->addRoute("GET", "/libros/{id}", ['App\Controllers\HomeController','findOne']);
    $route->addRoute(["GET","POST"], "/libros/update/{id}", ['App\Controllers\HomeController','updateOne']);
    $route->addRoute("GET", "/libros/titulo/{titulo}", ['App\Controllers\HomeController','findCode']);
    //$route->addRoute("GET", "/libros/titulo/{titulo}", ['App\Controllers\HomeController','findCode']);
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
