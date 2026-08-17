<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Db {
    public static function conectar(){
        $pdo = new PDO('mysql:host=localhost; dbname=videotienda; charset=utf8', 'prueba', 'tuclave');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    }
}