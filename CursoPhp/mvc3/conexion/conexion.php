<?php

//Crear clase
class Conexion
{
    //Crear atributos
    private $user = "prueba";
    private $pass = "hacker2012.L";

    //Crear la funcion que nos permite hacer conexion
    function conectar()
    {

        try {
            $pdo = new PDO('mysql:local=localhost; dbname=videotienda', $this->user, $this->pass);
            echo 'conectado';
        } catch (PDOException $th) {
            echo 'error' . $th->getMessage();
        }
    }
}

$conexion = new Conexion();
$conexion->conectar();
