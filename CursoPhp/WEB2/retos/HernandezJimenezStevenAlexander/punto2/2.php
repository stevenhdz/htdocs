<?php

trait Operations
{

    public function multiplicacion()
    {
        if($_POST['operacion'] == 'Multiplicación'){
            $total1 = $this->num1 * $this->num2;
            echo $total1;
        }
    }
    public function resta()
    {
        if($_POST['operacion'] == 'Resta'){
            $total1 = $this->num1 - $this->num2;
            echo $total1;
        }
    }
    public function Suma()
    {
        if($_POST['operacion'] == 'Suma'){
            $total1 = $this->num1 + $this->num2;
            echo $total1;
        }
    }
    public function Division()
    {
        if($_POST['operacion'] == 'División'){
            $total1 = $this->num1 / $this->num2;
            echo $total1;
        }
    }
    public function Potencia()
    {
        if($_POST['operacion'] == 'Potencia'){
            $total1 = pow($this->num1,$this->num2);
            echo $total1;
        }
    }
    public function Raiz2()
    {
        if($_POST['operacion'] == 'Raiz2'){
            $total1 = sqrt($this->num1);
            echo $total1;
        }
    }

}