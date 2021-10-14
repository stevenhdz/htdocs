<?php

namespace Comercial\Interfaces;

interface ICliente {
    public function obtenerClientes();
    public function obtenerCliente(int $id);
    public function eliminarCliente(int $id);
}