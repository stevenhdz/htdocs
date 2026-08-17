
   <?php

require 'bd.php';

    $sql = "CREATE TABLE todoTable(
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        texto VARCHAR(100) NOT NULL,
        completado BOOLEAN NOT NULL,
        timestamp TIMESTAMP
    )";

    if($conexion->query($sql) === true){
        echo "La tabla se creó correctamente...";
    }else{
        die("Error al crear tabla: " . $conexion->error);
    }