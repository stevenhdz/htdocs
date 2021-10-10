<?php

require_once '/opt/lampp/htdocs/CursoEloquent/vendor/autoload.php';
require_once '/opt/lampp/htdocs/CursoEloquent/app/database/database.php';
require_once '/opt/lampp/htdocs/CursoEloquent/app/models/Usuario.php';

$table = $argv[1];
$usuarios = $database::table("$table")->get();
print(print_r($usuarios,true));