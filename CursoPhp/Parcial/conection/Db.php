<?php

class Db {
    public static function conectar() {
        $pdo = new PDO('mysql:host=localhost;dbname=parqueadero;charset=utf8','prueba','hacker2012.L');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    }
}

?>