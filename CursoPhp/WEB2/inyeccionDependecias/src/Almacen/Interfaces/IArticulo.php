<?php

namespace Almacen\Interfaces;

interface IArticulo {
    public function obtenerArticulos();
    public function obtenerArticulo(int $id);
}