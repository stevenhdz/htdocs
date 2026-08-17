<?php

namespace Comercial\Persistences;

use Comercial\Interfaces\ICliente;
use Comercial\Models\Cliente;

class ClienteMem implements ICliente
{
    protected array $clientes;

    public function __construct()
    {
        $this->clientes = [
            1 => new Cliente(1, "alex", "steven@gmail.com", "mayo 15", 2, 1),
            2 => new Cliente(2, "ben", "steven@gmail.com", "mayo 15", 2, 1),
            3 => new Cliente(3, "camilo", "steven@gmail.com", "mayo 15", 2, 1),
            4 => new Cliente(4, "andres", "steven@gmail.com", "mayo 15", 2, 1),
            5 => new Cliente(5, "alejandro", "steven@gmail.com", "mayo 15", 2, 1),
            6 => new Cliente(6, "ismael", "steven@gmail.com", "mayo 15", 2, 1),
            7 => new Cliente(7, "peter", "steven@gmail.com", "mayo 15", 2, 1),
            8 => new Cliente(8, "steven2", "steven@gmail.com", "mayo 15", 2, 1),
        ];
    }

    public function obtenerClientes()
    {
        return $this->clientes;
    }

    public function obtenerCliente(int $id)
    {
        return $this->clientes[$id];
    }

    public function eliminarCliente(int $id)
    {
        $array = array_splice($this->clientes, $id);
        return $array;
    }
}
