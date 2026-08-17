<?php

namespace App\Controllers;

use App\Entities\Vendedor;
use App\Services\Doctrine;
use DateTime;
use DateTimeZone;
use Exception;

class HomeController {

    public function index(Doctrine $doctrine) {
        var_dump($doctrine);
    }

    public function insertar(Doctrine $doctrine) {
        
        try {
            $vendedor = new Vendedor();
            $vendedor->setNombreCompleto('Ana gil');
            $vendedor->setCodigo('O105');
            $vendedor->setCorreo('agil@hotmail.es');
            $vendedor->setZona("Oeste");
            $vendedor->setFechaIngreso(new DateTime("2020-10-25 17:00:00", new DateTimeZone("America/Bogota")));
            $vendedor->setActivo(true);
            $vendedor->setSalarioBase(2500000);
            $doctrine->em->persist($vendedor);
            $doctrine->em->flush();
            echo "El vendedor con ha sido guardado en la BD!";
        } catch (Exception $ex) {
            var_dump($ex);
        }
    }
}