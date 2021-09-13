<?php

require_once '../vendor/autoload.php';
require_once './database/database.php';
require_once './models/Usuario.php';

$table = $argv[1];
// $usuarios = $table::truncate();
$usuarios = Prestamo::truncate();

print(print_r($usuarios,true)); 