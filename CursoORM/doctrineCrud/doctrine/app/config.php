<?php

use App\Services\Doctrine;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

use function DI\create;
use function DI\get;

return [
    'connection' => [
        "driver" => "pdo_mysql",
        "host" => "localhost",
        "user" => "root",
        "password" => "toor",
        "port" => 3306,
        "dbname" => "almacen"      
    ],
    Doctrine::class => create(Doctrine::class)->constructor(get('connection')),
    Environment::class => function() { 
        $loader = new FilesystemLoader(__DIR__ . "/../src/App/Views");
        return new Environment($loader);
    }
];