<?php

require_once '2.php';

$Vendedor = new Vendedor('carolina', 'carolina@gmail.com', '2022-02-02');
$Vendedor->calcularSueldo(982000, 3);

echo $Vendedor;

echo '<br>';

$Empleado = new Empleado('steven', 'steven@gmail.com', '2021-02-02');
$Empleado->calcularSueldo(2500000, 18);

echo $Empleado;

echo '<br>';

$Consultor = new Consultor('alexander', 'alexander@gmail.com', '2021-02-02');
$Consultor->calcularSueldo(8, 50000);

echo $Consultor;