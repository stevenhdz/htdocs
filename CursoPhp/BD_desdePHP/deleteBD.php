<?php

require 'bd.php';

$sql = "DROP DATABASE todolistDB";
if($conexion2->query($sql) === true){
    echo "Base de datos creada correctamente...";
}else{
    die("Error al crear base de datos: " . $conexion2->error);
} 