<?php

namespace Comercial\Models;

class Cliente {
    protected int $id;
    protected string $nombre;
    protected string $correo;
    protected string $fecha_ingreso;
    protected int $capacidad_de_credito;
    protected bool $disponible;

    public function __construct(int $id, string $nombre, string $correo,string $fecha_ingreso, int $capacidad_de_credito, bool $disponible) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->fecha_ingreso = $fecha_ingreso;
        $this->capacidad_de_credito = $capacidad_de_credito;
        $this->disponible = $disponible;
    }

    public function getId() {
        return $this->id;
    }
    
    public function getNombre() {
        return $this->nombre;
    }
    
    public function getCorreo() {
        return $this->correo;
    }   

    public function getFecha_ingreso() {
        return $this->fecha_ingreso;
    }  

    public function getCapacidad_de_credito() {
        return $this->capacidad_de_credito;
    }  

    public function getDisponible() {
        return $this->disponible;
    }  

}