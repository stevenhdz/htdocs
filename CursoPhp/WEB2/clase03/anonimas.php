<?php
   /*   function suma(int $x, int $y): int {
         return $x + $y;
     } */

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    //funcion anonimas 

     $suma = function (int $x, int $y): int {
         return $x + $y;
     };

     echo var_dump($suma), "<br>";
     echo "La suma de 2 y 3 es: " . $suma(2,3) . "<br>";

    
     //clases anonimas
     class Usuario {
         protected $db;

         public function __construct($db)
         {
             $this->db = $db;
         }

         public function select(): string{
            return $this->db->seleccionar();
         }
     }

     $usr = new Usuario(
         new class {
             public function seleccionar(): string{
                 return "consulta SELECT * FROM usuarios";
             }
         }
     );

     echo $usr->select();