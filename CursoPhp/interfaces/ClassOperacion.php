<?php

require_once './Operacion.php';
require_once './OperacionBasicas.php';

    // implementar Operacion de ClassOperacion.php
    class Calcular implements Operation,Operacion_basicas{

        public function raizC(float $numero):float
        {
            $total = sqrt($numero);
            return $total;
        }

        public function potencia(int $numero, int $potencial):int
        {
            $total = pow($numero, $potencial);
            return $total;
        }

        public function op_basicas(float $num1, float $num2, string $operacion)
        {
            if($operacion == "+"){
                $result = $num1 + $num2;
            }else if($operacion == "-"){
                $result = $num1 - $num2;
            }else if($operacion == "*"){
                $result = $num1 * $num2;
            }else if($operacion == "/"){
                $result = $num1 / $num2;
            }else{
                $return = "Operacion no valida";
            }
            return $result;
        }
    }

?>