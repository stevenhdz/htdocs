<?php

error_reporting(E_ALL);
ini_set('display_errors', '1'); 

try {

    $servidor = "localhost";
    $nombreusuario = "prueba";
    $password = "hacker2012.L";
    $db = "todolistDB";

    $conexion = new mysqli($servidor, $nombreusuario, $password, $db);
    $conexion2 = new mysqli($servidor, $nombreusuario, $password);

    if($conexion-> connect_error){
        die("Conexión fallida: " . $conexion-> connect_error);
    }elseif($conexion2-> connect_error){
        die("Conexión fallida: " . $conexion2-> connect_error);
    }

    echo "Conexión exitosa...";

} catch (Exception $e) {
    echo $e;
}

?>