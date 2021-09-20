<?php

trait Operations
{

    // ... mucho parametros

    public function multiplicacion()
    {
        $total1 = $this->num1 * $this->num2;
        echo "multiplicacion: " . $total1 . "<br>";
    }

    public function resta()
    {
        $total1 = $this->num1 - $this->num2;
        echo "resta: " .  $total1 . "<br>";
    }

    public function suma()
    {
        $total1 = $this->num1 + $this->num2;
        echo "suma: " .  $total1 . "<br>";
    }

    public function factorial($num1)
    {
        $factorial = 1;
        for ($i = 1; $i <= $num1; $i++) {
            $factorial = $factorial * $i;
        }
        echo "factorial: " . $factorial . "<br>";
    }

    public function max(...$ent)
    {
        echo "maximo: " . max($ent) . "<br>";
    }

    public function min(...$ent)
    {
        echo "maximo: " . min($ent) . "<br>";
    }

    public function prom(...$ent)
    {
        $suma = 0;
        foreach ($ent as $numero) {
            $suma += $numero;
        }
        $cantidad = count($ent);
        echo $cantidad;

        $promedio = $suma / $cantidad;
        echo "Promedio: " . $promedio . "<br>";
    }
}
