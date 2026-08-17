<?php

try {

   

    if ($_POST['Nombre'] != "" && $_POST['Correo'] != "" && $_POST['Salario'] != "" &&  $_POST['fechaDeIngreso'] != "") {

        $fecha = DateTime::createFromFormat('Y-m-d', $_POST['fechaDeIngreso'])->format('j-M-Y');

        if (!filter_var($_POST['Nombre'], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[A-Za-z]/")))) {
            throw new Exception('El formato del nombre debe ser solo letras no es correcto');
        } else {
            $fullName = filter_var($_POST['Nombre'], FILTER_SANITIZE_STRING);
        }
    
        if (!filter_var($_POST['Correo'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('El formato del correo no es correcto');
        } else {
            $email = filter_var($_POST['Correo'], FILTER_SANITIZE_EMAIL);
        }
    
        if (!filter_var($_POST['Salario'], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9,]+[^.]/")))) {
            throw new Exception('El formato debe ser tipo moneda ejemplo 122.000');
        } else {
            $salary = filter_var($_POST['Salario'], FILTER_SANITIZE_NUMBER_INT);
        }
    
        if (isset($fecha)) {
            $date = filter_var($fecha, FILTER_SANITIZE_STRING);
            $_POST['fechaDeIngreso'] = $date;
        }

        echo 'la información del trabajador es correcta';

    }else{
        $rawData = file_get_contents("php://input");
        throw new Exception(header("Location: http://localhost:80/CursoPhp/WEB2/retos/reto3/404.php?{$rawData}"));
    } 
   

    /* echo $fullName . "<br>";
    echo $email . "<br>";
    echo $salary . "<br>";
    echo $date . "<br>"; */
} catch (Exception $th) {
    echo $th;
}
