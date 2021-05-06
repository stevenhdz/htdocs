<?php
//operadores de asignacion
$x = 5;
$y = 10;

$x *= $y;
$x = $x * $y;
echo $x;
echo "<br>";
//operadores de comparacion
$w = 5;
$z = "5";

var_dump($w == $z);
echo "<br>";
var_dump($w === $z);
echo "<br>";
var_dump($w > $z);
echo "<br>";
var_dump($w > $z);
echo "<br>";
var_dump($w <= $z);
echo "<br>";
var_dump($w >= $z);
echo "<br>";
var_dump($w <> $z);
echo "<br>";
var_dump($w != $z);
echo "<br>";
var_dump($w !== $z);
echo "<br>";
//operadores de decremento e incremento
echo $w++; /* --> */echo "<br>"; echo $w;
echo "<br>";
/* incrementa antes de mostrar */ echo ++$w;
echo "<br>";
echo --$w;
echo "<br>";
echo $w--; /* --> */echo "<br>"; echo $w;




