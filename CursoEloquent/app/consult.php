<?php

require_once '../vendor/autoload.php';
require_once './database/database.php';
require_once './models/Usuario.php';

$table = $argv[1];
$usuarios = $database::table("$table")->get();
print(print_r($usuarios,true)); 