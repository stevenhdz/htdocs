<?php

namespace Almacen\Persistences;

use Almacen\Interfaces\IArticulo;
use Almacen\Models\Articulo;

class ArticuloMem implements IArticulo {
    protected array $articulos;

    public function __construct() {
        $this->articulos = [
            1 => new Articulo(1, "Artículo 1", "500000"),
            2 => new Articulo(2, "Artículo 2", "600000"),
            3 => new Articulo(3, "Artículo 3", "450000"),
        ];
    }

    public function obtenerArticulos() {
        return $this->articulos;
    }
    
    public function obtenerArticulo(int $id) {
        return $this->articulos[$id];
    }
}