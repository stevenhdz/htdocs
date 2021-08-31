<?php
        class Person {
            protected $nombre;
            protected $nroIdent;
            protected $apodo;
            protected $nroVeces = 0;

            function __construct($nombre,$nroIdent,$apodo)
            {
                $this->nombre = $nombre;
                $this->nroIdent = $nroIdent;
                $this->apodo = $apodo;
            }

            public function getApodo(){
                return $this->apodo;
            }
        
            public function setApodo($apodo){
               /*  if(!empty($apodo))
                    $this->apodo = $apodo; */
                    if($this->nroVeces <= 2){
                        $this->nroVeces++;
                        $this->apodo = $apodo;
                    }
                
            }
            
            public function getNombre(){
                return $this->nombre;
            }
        
            public function setNombre($nombre){
                $this->nombre = $nombre;
            }

            public function getNroIdent(){
                return $this->nroIdent;
            }
        
            public function setNroIdent($nroIdent){
                $this->nroIdent = $nroIdent;
            }

            public function __toString()
            {
                return (string) $this->nombre ." identificado con el numero " . $this->nroIdent;
            }

            public function __destruct()
            {
                echo "Eliminando el objecto de $this->nombre <br>";
               // $this->smtpClose();
            }
        }
  
        $p1 = new Person("Juan","123","Olga");
        $infoMostrar = "{$p1->getNombre()} identificado con {$p1->getNroIdent()}";

        $p2 = new Person("Olga","123","Carlos");
        $infoMostrar = "{$p2->getNombre()} identificado con {$p2->getNroIdent()}";

        echo "Info: $infoMostrar <br>";
        // echo var_dump($p1), '<br>';
        // echo "Persona $p1 <br>";
        $p2->setNombre("alicia");
        echo "Persona {$p2->getNombre()} <br>";


        //mas de 3 no se peude
        $p2->setApodo("alicia");
        echo "Persona {$p2->getApodo()} <br>";
        $p2->setApodo("alicia");
        echo "Persona {$p2->getApodo()} <br>";
        $p2->setApodo("alicia");
        echo "Persona {$p2->getApodo()} <br>";
        $p2->setApodo("alicia");
        echo "Persona {$p2->getApodo()} <br>";