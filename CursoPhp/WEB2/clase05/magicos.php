<?php

class Cliente {
    protected $nombre;


    public function __construct(){}

   /*  public function setNombre(string $nombre){
        $this->nombre = $nombre;
    }

    public function getNombre(){
        return $this->nombre;
    } */

    public function __get(string $name){
        if(!property_exists($this, $name)){
            die("La propiedad {$name} no existe en la clase " . __CLASS__);
        }
        return  $this->{$name};
    }

    public function __set(string $name, string $value){
        $this->{$name} = $value;
    }


    public function __invoke(string $archivo){
        echo "....ejecucion clase " . __CLASS__ . "como un metodo y abriendo {$archivo}<br>";
    }
}

$cli = new Cliente;
/* $cli->setNombre('Steven');
echo $cli->getNombre(); */

/* echo $cli->nombre; */

//invocar
$cli('eje.pdf');

//es escalable
print_r(is_callable($cli));




