<?php

use Comercial\Interfaces\ICliente;
use Comercial\Persistences\ClienteMem;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

use function DI\create;

return [
    ICliente::class => create(ClienteMem::class),
    Environment::class => function () {
        $loader = new FilesystemLoader(__DIR__ . "/../src/Comercial/Views");
        return new Environment($loader);
    }
];
