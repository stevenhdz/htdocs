<?php
/* coche toyota rojo tiene dos metodos acelerar, bocina, 4 puestos */

use phpDocumentor\Reflection\Types\Boolean;

class Coche {
            protected $marca;
            protected $color;
            protected $puestos;
            public $bocina;
            public $acelerar;

            function __construct($marca,$color,$puestos)
            {
                $this->marca = $marca;          
                $this->color = $color;
                $this->puestos = $puestos;
            }
            
            public function getMarca(){
                return $this->marca;
            }
        
            public function setMarca($marca){
                $this->marca = $marca;
            }

            public function getColor(){
                return $this->color;
            }
        
            public function setColor($color){
                $this->color = $color;
            }

            public function getPuestos(){
                return $this->puestos;
            }
        
            public function setPuestos($puestos){
                $this->puestos = $puestos;
            }

            function acelerar($acelerar)
            {
                $acelerar++;
                echo "puede ir a velocidades de: " . $acelerar;
            }

            function tocarBocina($bocina)
            {
                if($bocina == true){
                    echo "tocando bocina";
                }else{
                    echo "bocina apagada"; 
                }  
            }

            public function __toString()
            {
                return (string) "Mi carro es marca ". $this->marca ." es de color  " . $this->color . "tiene" . $this->puestos."puertas" . $this->acelerar("100") . $this->tocarBocina(true);
            }

            public function __destruct()
            {
                echo "Eliminando el objecto de $this->marca <br>";
                echo "Eliminando el objecto de $this->color <br>";
                echo "Eliminando el objecto de $this->puestos <br>";
               // $this->smtpClose();
            }
        }
  
        $p1 = new Coche("TOYOTA","VERDE","4","100",true);
        $infoMostrar = "Mi carro es de marca {$p1->getMarca()}  es de color  {$p1->getColor()} tiene{$p1->getPuestos()} puertas {$p1->acelerar("100")} {$p1->tocarBocina(true)}  " ;

        echo "Info: $infoMostrar <br>";
       
      
        echo "Persona {$p1->getMarca()} <br>";

