<?php

require_once '2.php';

class Traits
{
    public int $num1;
    public int $num2;
    use Operations;
}

try {
    $tr = new Traits;

    if ($_POST['Num1'] != "" && $_POST['Num2'] != "") {
        $tr->num1 = $_POST['Num1'];
        $tr->num2 = $_POST['Num2'];
        $tr->multiplicacion();
        $tr->resta();
        $tr->Suma();
        $tr->Potencia();
    } else {
        throw new Exception('No pueden estar los campos vacios o coloque cero (0) en su lugar');
    }

    if (filter_var(
        $_POST['Num2'],
        FILTER_VALIDATE_REGEXP,
        array("options" => array("regexp" => "/^-?[1-9.]\d*(\.\d+)?$/"))
    )) {
        $tr->Division();
    } else {
        if ($_POST['operacion'] == 'División') {
            throw new Exception('Num2: División no puede ser 0');
        }
    }


    if (
        filter_var(
            $_POST['Num1'],
            FILTER_VALIDATE_REGEXP,
            array("options" => array("regexp" => "/^[0-9.]+$/"))
        ) || $_POST['Num1'] == 0
    ) {
        $tr->Raiz2();
    } else {
        if ($_POST['operacion'] == 'Raiz2') {
            throw new Exception('Num1: el numero no puede ser negativo');
        }
    }
} catch (Exception $th) {
    echo $th;
}
