<pre>
    Seguridad - rapidez BD
</pre>

<?php

    $servidor = "localhost";
    $nombreusuario = "prueba";
    $password = "hacker2012.L";

    $conexion = new mysqli($servidor, $nombreusuario, $password);

    if($conexion-> connect_error){
        die("Conexión fallida: " . $conexion-> connect_error);
    }

    echo "Conexión exitosa...";
    
?>