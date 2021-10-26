<?php

use App\Services\Doctrine;
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
    Doctrine::class => create(Doctrine::class)->constructor(get('connection'))
];