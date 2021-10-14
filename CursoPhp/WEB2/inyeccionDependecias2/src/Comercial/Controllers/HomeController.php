<?php

namespace Comercial\Controllers;

use Comercial\Interfaces\ICliente;
use Twig\Environment;

class HomeController {

    protected ICliente $repositorio;
    protected Environment $twig;

    public function __construct(ICliente $repositorio, Environment $twig) {
        $this->repositorio = $repositorio;
        $this->twig = $twig;
    }

    public function index() {
        echo $this->twig->render("index.twig", []);
    }

    public function obtenerClientes() {
        echo $this->twig->render("listado.twig", ["clientes" => $this->repositorio->obtenerClientes()]);
    }
    
    public function obtenerCliente(int $id) {
        echo $this->twig->render("consulta.twig", ["cliente" => $this->repositorio->obtenerCliente($id)]);
    }    

    public function eliminarCliente(int $id) {
        echo $this->twig->render("delete.twig", ["clientes" => $this->repositorio->eliminarCliente($id)]);
    }  
}