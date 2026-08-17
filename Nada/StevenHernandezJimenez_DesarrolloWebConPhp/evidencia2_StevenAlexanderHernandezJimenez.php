<!-- Steven Alexander Hernandez Jimenez 
Desarrollo web con PHP --> 

<html>
    <head>
        <meta charset="UTF-8">
        <title>Actividad 2</title>
    </head>
    <body>
        <?php
        echo 'Punto 1 : <br>';
        $array = array("blanco","amarillo","azul","entre otros");
        var_dump($array);
        echo '<br>';
        echo 'Punto 2 : <br>';
        ?>
        
       

           <?php
           $alumnos = [
                ["Nombre" => "Juan Perez",
                 "Direccion" => "Cra. 45 # 45 - 56",
                 "Telefono" => "3456789",
                 "Fecha de cumpleaños" => "23/12/1997",
                 "Color favorito" => "Amarillo",
                 "Significado" => "Riqueza y alegria"],
               ["Nombre" => "Pablo Manrique",
                 "Direccion" => "Clle. 23 # 12 - 19 sur",
                 "Telefono" => "3214567",
                 "Fecha de cumpleaños" => "12/10/1980",
                 "Color favorito" => "Verde",
                 "Significado" => "No se encuentra el significado"],
               ["Nombre" => "Nancy Peña",
                 "Direccion" => "Av. 34 $ 16 - 12",
                 "Telefono" => "2135423",
                 "Fecha de cumpleaños" => "07/06/2000",
                 "Color favorito" =>  "Rojo",
                 "Significado" => "No se encuentra el significado"]
              ];
        ?>
        <!-- tabla donde se pintara los datos que estan en el array con sus cabeceras default -->
<table border="1">
    <tr>
        <th>Nombres</th>
        <th>Direccion</th>
        <th>Telefono</th>
        <th>Fecha de cumpleaños</th>
        <th>Color favorito</th>
        <th>Significado</th>
        
    </tr>
<?php
foreach ( $alumnos as $r ) {
    /* punto 3 Amarillo */
           $result1 = isset($colores[$datos[5]]) ? $array[$datos[5]] : "No se encuentra el significado";
        ?>
        <tr>
        <?php
        foreach ( $r as $v ) {
           /* if ($significado=="") {
                $significado="No se encuentra el significado";
             } */
        ?>
            
                <td><?php echo $v;?></td>
        <?php
        }
        ?>
        </tr>
<?php
}
?>
</table>
    </body>
</html>
