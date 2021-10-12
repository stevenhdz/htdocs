<?php

namespace Comercial\Models;

class Articulo {
    protected int $id;
    protected string $descripcion;
    protected float $precio;

    public function __construct(int $id, string $descripcion, float $precio) {
        $this->id = $id;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
    }

    public function getId() {
        return $this->id;
    }
    
    public function getDescripcion() {
        return $this->descripcion;
    }
    
    public function getPrecio() {
        return $this->precio;
    }   

}