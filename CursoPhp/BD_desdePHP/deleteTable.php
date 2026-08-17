<?php

require 'bd.php';

    $sql = "DROP TABLE todoTable";

    if($conexion->query($sql) === true){
        echo "La tabla se borro exitosamente..";
    }else{
        die("Error al borrar tabla: " . $conexion->error);
    }