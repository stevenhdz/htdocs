<?php


abstract class Trabajador
{
    protected $nombre;
    protected $correo;
    protected $fechaIngreso;

    public function __construct(string $nombre, string $correo, string $fechaIngreso)
    {
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->fechaIngreso = $fechaIngreso;
    }

    public function __toString()
    {
        echo 'Nombre:' . $this->nombre . '<br>';
        echo 'Sueldo:' . $this->sueldo . '<br>';
    }

    public abstract function calcularSueldo($sueldo, $impuesto);
}


class Empleado extends Trabajador
{
    protected $sueldo;
    protected $impuesto;

    public function calcularSueldo($sueldo, $impuesto)
    {
        echo "Sueldo: " . ($sueldo - ($sueldo * $impuesto)) . "<br>";
    }

    public function __construct($nombre, $correo, $fechaIngreso)
    {
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->fechaIngreso = $fechaIngreso;
    }

    public function __toString()
    {
        return 'Nombre:' . $this->nombre . "<br>";
    }
}


class Vendedor extends Trabajador
{
    protected $salarioBase;
    protected $valorVenta;
    protected $porcentajeComision;

    public function calcularSueldo($salarioBase, $porcentajeComision)
    {
        echo "Sueldo: " . ($salarioBase+($salarioBase * $porcentajeComision)) . "<br>";
    }

    public function __construct($nombre, $correo, $fechaIngreso)
    {
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->fechaIngreso = $fechaIngreso;
    }

    public function __toString()
    {
        return 'Nombre:' . $this->nombre . "<br>";
    }
}

class Consultor extends Trabajador
{

    protected $horas;
    protected $tarifa;

    public function calcularSueldo($horas, $tarifa)
    {
        echo "Sueldo: " . $horas * $tarifa . "<br>";
    }

    public function __construct($nombre, $correo, $fechaIngreso)
    {
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->fechaIngreso = $fechaIngreso;
    }

    public function __toString()
    {
        return 'Nombre:' . $this->nombre . "<br>";
    }
}
