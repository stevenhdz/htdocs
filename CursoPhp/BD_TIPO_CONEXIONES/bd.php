<pre>
    Seguridad - rapidez BD
</pre>

<?php

    $servidor = "localhost";
    $nombreusuario = "prueba";
    $password = "tuclave";

    $conexion = new mysqli($servidor, $nombreusuario, $password);

    if($conexion-> connect_error){
        die("Conexión fallida: " . $conexion-> connect_error);
    }

    echo "Conexión exitosa...";
    
?>