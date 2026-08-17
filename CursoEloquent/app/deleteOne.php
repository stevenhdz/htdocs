<?php

require_once '../vendor/autoload.php';
require_once './database/database.php';
require_once './models/Usuario.php';


$id = $argv[1];
$usuarios = Prestamo::find($id);
if (isset($usuarios)) {
    $usuarios->delete();
}else{
    echo 'No existe';
}
print(print_r($usuarios,true)); 