<?php

class Producto {
    protected $id;
    protected $descripcion;
    protected $existencia;
    protected $precio;
    protected $disponible;

    public function __get($clave){
        return  $this->{$clave};
    }

    public function __set($clave, $value){
            $this->{$clave} = $value;
    }

}

$cli = new Producto();
echo "<pre>";
var_dump((int)$cli->id = 1);
var_dump((string)$cli->descripcion = 'Cafeina');
var_dump((int)$cli->existencia = 99);
var_dump((float)$cli->precio = 3500);
var_dump((bool)$cli->disponible = 1);
echo "</pre>";
