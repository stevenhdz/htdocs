<?php
    function saludo (string $texto = 'Valor defecto'): string {
        return sprintf('Hola %s', /* (int) */
        $texto);
    }
    echo saludo();
    echo '<br>';
    echo saludo('andres');


    // dividir 2 entero (...) muchas cosas 
    function divisionEntera(...$ent): int {
        return intdiv($ent[0], $ent[1]);
    }
    echo '<br>';
    echo divisionEntera(10,4);