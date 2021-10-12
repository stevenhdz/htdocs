<?php

namespace Comercial\Interfaces;

interface IArticulo {
    public function obtenerArticulos();
    public function obtenerArticulo(int $id);
}