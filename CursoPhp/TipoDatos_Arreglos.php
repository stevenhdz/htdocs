<?php

//caracter
$letra = "c";
//entero
$numero = 45;
//cadena
$cadena = "Mi NOMBRE";
//flotante
$decimal = 8.3456;
//booleano
$verdadero = true;
//arreglo
$carros = array("chico","chica","chicas");
$edad = array(25,30,32);
//nulos
$nada = null;

echo $cadena . "<br>";
echo $decimal . "<br>";
print_r($carros);
print_r($edad);

echo max(1, 3, 9, 6, 7);

// boolean, integer, float, string
$dia = 14;	// Se declara una variable de tipo int.
$estatura = 1.73;	// Se declara una variable de tipo float.
$nombre = "Nati";	// Se declara una variable de tipo string.
$valor = 0.123e2;	// Se declara una variable de tipo float notación c.
$esValido = true;	// Se declara una variable boolean.
$dias[0] = 31;
$dias[1] = 28;
$dias[] = 29;
$coches = array("BMW","Renault","Mazda","Toyota");
$nombres = array('nom1'=>'Juan', 'nom2'=>'María', "surName"=>"Álvarez");
$nombres[3] = "Olga";
$nombres['lastName'] = 'Lamas';
echo "Valor contiene = {$valor} <br>";
echo "Mi vehículo es un ".$coches[2]."<br>";
echo "$dias tiene ".count($dias)." elementos<br>";
echo var_dump($dia)."<br>";
echo var_dump($estatura)."<br>";
echo var_dump($nombre)."<br>";
echo var_dump($valor)."<br>";
echo var_dump($esValido)."<br>";
echo var_dump($dias)."<br>";
echo var_dump($coches)."<br>";
echo var_dump($nombres)."<br>";
$nombre = null;
echo var_dump($nombre)."<br>";


?>