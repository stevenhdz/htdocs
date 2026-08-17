<?php
//Funciones para strings
$mensaje = "Hoy voy a aprender mucho";
//longitud
echo strlen($mensaje);
echo "<br>";
//Numero de palabras
echo str_word_count($mensaje);
echo "<br>";
//reversa
echo strrev($mensaje);
echo "<br>";
//encontrar texto
echo strpos($mensaje, "voy");
echo "<br>";
//reemplazar texto
echo str_replace("aprender","nadar", $mensaje);
echo "<br>";
//convertir a minusculas
echo strtolower($mensaje);
echo "<br>";
//convertir a mayusculas
echo strtoupper($mensaje);
echo "<br>";
//comparar cadenas
echo strcmp("hola","adios");
echo "<br>";
//subtraer cadena
echo substr($mensaje,10, 15);
echo "<br>";
//remover espacios
echo trim("    hola soy     alex");