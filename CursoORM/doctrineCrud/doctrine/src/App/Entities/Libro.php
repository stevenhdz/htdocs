<?php

namespace App\Entities;

use DateTime;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Column;

/**
 * @Entity(repositoryClass="App\Repositories\LibroRepository")
 * @Table(name="Libro")
 */
class Libro {

    /**
     * @Id
     * @GeneratedValue
     * @Column(type="bigint")
     */
    protected int $id;

    /**
     * @Column(name="titulo", type="string", length="20", nullable=false)
     */
    protected string $titulo;

    /**
     * @Column(type="string", length = 13, nullable = false)
     */
    protected string $isbn;  

    /**
     * @Column(type="datetime", name="fechaIngreso", nullable = false)
     */
    protected DateTime $fechaIngreso;    

    /**
     * @Column(type="string", length = 20, nullable = false)
     */    
    protected string $estado;

    /**
     * @Column(type="boolean")
     */
    protected bool $disponible;

    /**
     * @Column(type="string", length = 30, nullable = false)
     */
    protected string $autor; // doctrine basic-mapping

    /**
     * @Column(type="bigint")
     */
    protected int $anio;
    
    public function __construct() {
        
    }

    public function getId(): int {
        return $this->id;
    }

    public function setId(int $id): void {
        $this->id = $id;
    }

    public function getIsbn(): string {
        return $this->isbn;
    }
    
    public function setIsbn(string $isbn): void {
        $this->isbn = $isbn;
    }
    
    public function getTitulo(): string {
        return $this->titulo;
    }
    
    public function setTitulo(string $titulo): void {
        $this->titulo = $titulo;
    }
    
    public function getFechaIngreso(): DateTime {
        return $this->fechaIngreso;
    }
    
    public function setFechaIngreso(DateTime $fechaIngreso): void {
        $this->fechaIngreso = $fechaIngreso;
    }
    
    public function getEstado(): string {
        return $this->estado;
    }
    
    public function setEstado(string $estado): void {
        $this->estado = $estado;
    }
    
    public function getDisponible(): bool {
        return $this->disponible;
    }
    
    public function setDisponible(bool $disponible): void {
        $this->disponible = $disponible;
    }
    
    public function getAutor(): string {
        return $this->autor;
    }
    
    public function setAutor(string $autor): void {
        $this->autor = $autor;
    }
    
    public function getAnio(): int {
        return $this->anio;
    }
    
    public function setAnio(int $anio): void {
        $this->anio = $anio;
    }  
}

