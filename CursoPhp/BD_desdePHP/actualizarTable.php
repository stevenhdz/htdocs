<?php

require 'bd.php';

    $sql = "ALTER TABLE `todoTable` CHANGE `id` `idS` INT(11) NOT NULL AUTO_INCREMENT";

    if($conexion->query($sql) === true){
        echo "La tabla se borro exitosamente..";
    }else{
        die("Error al borrar tabla: " . $conexion->error);
    }