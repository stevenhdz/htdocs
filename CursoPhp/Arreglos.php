<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arreglos</title>
    <style>
        body{
            background-color: #E85F79;
            font-family: arial;
            font-size: 2em;
            padding: 50px;
        }
    </style>
</head>
<body>
    <?php
        $frutas = array("platano","uva","manzana");
        print_r($frutas);
        echo $frutas[2];
        echo "<br>";
        echo count($frutas)." elementos";
        echo "<br>";
        for($i = 0; $i < count($frutas); $i++){
            echo $frutas[$i] . "<br>";
        }

        $edades = array("Marcos" => '34',"Tania" => 32,"Omar" => 27);
        print_r($edades);
        echo "<br>";
        echo "var_dump";
        echo "<br>";
        var_dump($edades);
        echo "<br>";
        echo $edades['Tania'];
        echo "<br>";
        foreach($edades as $key => $value){
            echo $key . " tiene el valor de ". $value .  "<br>";
        }





            $colores[] = "Rojo";
            $colores[] = "Verde";
            $colores[] = "Azul";
            $colores[] = "Amarillo";
            $colores[] = "Negro";
      
            echo $colores[0];  //imprime azul
      

        $datos_personales = array($colores[] = "Rojo","Apellidos" =>"Melias", "Edad" => "22","Pais"=> "Cuba")  ;

        echo $datos_personales[$colores[0]] ; //Imprime 22


    ?> 
</body>
</html>