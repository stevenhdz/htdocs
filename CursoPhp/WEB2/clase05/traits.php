<?php

trait Mensaje
{
    public function saludar()
    {
        if (isset($this->nombre)) {
            echo "Hola {$this->nombre}";
        } else {
            echo "Hola";
        }
    }
    

    // ... mucho parametros

    public function multiplicacion()
    {
        $total1 = $this->num1 * $this->num2;
        echo "multiplicacion" . $total1;
    }

    public function resta()
    {
        $total1 = $this->num1 - $this->num2;
        echo "resta" .  $total1;
    }
}

/* trait CalcularResta
{
    public function resta()
    {
        $total1 = $this->num1 - $this->num2;
        echo "resta" .  $total1;
    }
}


trait CalcularMultiplicacion
{
    public function multiplicacion()
    {
        $total1 = $this->num1 * $this->num2;
        echo "multiplicacion" . $total1;
    }
} */

class Traits
{
    public string $nombre;
    public int $num1;
    public int $num2;
    use Mensaje;
}

$tr = new Traits;
$tr->mensaje = "luisa";

$tr->num1 = 1;
$tr->num2 = 2;
$tr->multiplicacion();
$tr->resta();

//$tr->saludar();
