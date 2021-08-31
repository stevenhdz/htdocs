<?php

// estudiar un poco 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    abstract class PersonaAbstract
    {
        public function nombre (string $nombre): string {
            return $nombre;
        }

        abstract public function edad(int $edad): int;
    }

    class Empleado extends PersonaAbstract
    {
        public function edad(int $edad): int {
            return $edad;
        }
    }
    
    $per = new Empleado;

  /* echo $per->nombre('pepa'), '<br>';
    echo $per->edad(9); */

abstract class Unidad
{
    protected $vivo = true;
    protected $nombre;

    public function __construct(string $nombre)
    {
        $this->nombre = $nombre;
    }

    public function mover(string $dir){
        echo "<h5>$this->nombre avanza hacia $dir</h5>";
    }

   /*  public function atacar(string $enemigo){
        echo "<h5>$this->nombre ataca a $enemigo</h5>";
    } */

    abstract public function atacar(string $enemigo);
}


class Tanque extends Unidad
{
    public function atacar(string $enemigo){
        echo "<h5>$this->nombre ataca a $enemigo</h5>";
    }
}


class Avion extends Unidad
{
    public function atacar(string $enemigo){
        echo "<h5>$this->nombre dispara a $enemigo</h5>";
    }
}

/* $titan = new Unidad('Titan');
$titan->mover('Sur');
$titan->atacar('Zeus'); */

$titan2 = new Tanque('Alex');
$titan2->mover('Colina');
$titan2->atacar('Zeus');

echo '<br>';

$titan2 = new Avion('Titann');
$titan2->mover('Santa fe');
$titan2->atacar('Zeus');