<?php

namespace App\Entities;

use DateTime;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Table;

/**
 * @Entity
 * @Table(name="vendedores")
 */
class Vendedor {

    /**
     * @Id
     * @GeneratedValue
     * @Column(type="bigint")
     */
    protected int $id;

    /**
     * @Column(name="nombre_completo", type="string", length="50", nullable=false)
     */
    protected string $nombreCompleto;

    /**
     * @Column(type="string", length = 4, nullable = false)
     */
    protected string $codigo;  

    /**
     * @Column(type="string", length = 60, nullable = false)
     */
    protected string $correo;    

    /**
     * @Column(type="string", length = 20, nullable = false)
     */    
    protected string $zona;

    /**
     * @Column(type="datetime", name="fecha_ingreso", nullable = false)
     */
    protected DateTime $fechaIngreso;

    /**
     * @Column(type="boolean")
     */
    protected bool $activo; // doctrine basic-mapping

    /**
     * @Column(type="float", name="salario_base", nullable = false)
     */
    protected float $salarioBase;
    
    public function __construct() {
        
    }

    public function getId(): int {
        return $this->id;
    }

    public function getNombreCompleto(): string {
        return $this->nombreCompleto;
    }
    
    public function setNombreCompleto(string $nombreCompleto): void {
        $this->nombreCompleto = $nombreCompleto;
    }
    
    public function getCodigo(): string {
        return $this->codigo;
    }
    
    public function setCodigo(string $codigo): void {
        $this->codigo = $codigo;
    }
    
    public function getCorreo(): string {
        return $this->correo;
    }
    
    public function setCorreo(string $correo): void {
        $this->correo = $correo;
    }
    
    public function getZona(): string {
        return $this->zona;
    }
    
    public function setZona(string $zona): void {
        $this->zona = $zona;
    }
    
    public function getFechaIngreso(): DateTime {
        return $this->fechaIngreso;
    }
    
    public function setFechaIngreso(DateTime $fechaIngreso): void {
        $this->fechaIngreso = $fechaIngreso;
    }
    
    public function getActivo(): bool {
        return $this->activo;
    }
    
    public function setActivo(bool $activo): void {
        $this->activo = $activo;
    }
    
    public function getSalarioBase(): float {
        return $this->salarioBase;
    }
    
    public function setSalarioBase(float $salarioBase): void {
        $this->salarioBase = $salarioBase;
    }  
}

