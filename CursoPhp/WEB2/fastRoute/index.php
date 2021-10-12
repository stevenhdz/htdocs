<?php

require "vendor/autoload.php";

$dispatcher = FastRoute\simpleDispatcher(function (FastRoute\RouteCollector $route){
    $route->addRoute("GET", "/usuarios", "obtenerUsuarios");
    $route->addRoute("GET", "/", "raiz");
    $route->addRoute("GET", "/usuario/{id:\d+}[/{nom}]", "obtenerUsuario");
});

$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// routeinfo contiene tres posiciones 0=estado, 1=metodo a ejecutar, 2=array con los parámetros
$routeInfo = $dispatcher->dispatch($httpMethod, $uri);

echo "<pre>";
var_dump($routeInfo);

switch($routeInfo[0]) {
    case \FastRoute\Dispatcher::NOT_FOUND:
        echo "La ruta no fue encontrada !!";
        break;
    case \FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        echo "El método no está permitido !!";
        break;
    case \FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $params = $routeInfo[2];
        call_user_func($handler, $params);
        break;
}

function obtenerUsuarios() {
    echo "... Obteniendo todos los usuarios !";
}

function raiz() {
    echo "... Entrada inicial al programa !";
}

function obtenerUsuario(array $params = []) {
    // var_dump($params);
    echo "... Obteniendo el usuarios con el id: {$params['id']} !<br>";
    echo isset($params['nom']) ? "... con el nombre: {$params['nom']}" : "";
}