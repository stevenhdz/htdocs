<?php

class Db {
    public static function conectar() {
        $pdo = new PDO('mysql:host=localhost;dbname=parqueadero;charset=utf8','prueba','tuclave');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    }
}

?>