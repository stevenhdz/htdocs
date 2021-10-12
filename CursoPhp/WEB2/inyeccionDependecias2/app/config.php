<?php

use Almacen\Interfaces\IArticulo;
use Almacen\Persistences\ArticuloMem;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

use function DI\create;

return [
    IArticulo::class => create(ArticuloMem::class),
    Environment::class => function () {
        $loader = new FilesystemLoader(__DIR__ . "/../src/Comercial/Views");
        return new Environment($loader);
    }
];
