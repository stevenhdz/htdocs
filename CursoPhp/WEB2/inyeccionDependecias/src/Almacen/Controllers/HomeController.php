<?php

namespace Almacen\Controllers;

use Almacen\Interfaces\IArticulo;
use Twig\Environment;

class HomeController {

    protected IArticulo $repositorio;
    protected Environment $twig;

    public function __construct(IArticulo $repositorio, Environment $twig) {
        $this->repositorio = $repositorio;
        $this->twig = $twig;
    }

    public function index() {
        echo "<h3>... index desde el home controller ! </h3>";
    }

    public function obtenerArticulos() {
        // echo "<h3>... Obteniendo todos los artículos .... ! </h3>";
        echo $this->twig->render("listado.twig", ["articulos" => $this->repositorio->obtenerArticulos()]);
    }
    
    public function obtenerArticulo(int $id) {
        // echo "<h3>... Obteniendo el artículo con id $id ! </h3>";
        echo $this->twig->render("consulta.twig", ["articulo" => $this->repositorio->obtenerArticulo($id)]);
    }    
}