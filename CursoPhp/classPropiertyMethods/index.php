<?php

//detiene proceso y include no
require_once './ClassOperations.php';


//instancia
$operacion = new Operacion(10,20);
$totalSuma = $operacion->getSuma();
echo $totalSuma;
echo '<br>';

$operacion = new Operacion(10,20);
$totalResta = $operacion->getResta();
echo $totalResta;
echo '<br>';

$operacion = new Operacion(10,20);
$totalMultiplicacion = $operacion->getMultiplicacion();
echo $totalMultiplicacion;
echo '<br>';

$operacion = new Operacion(10,20);
$totalDivision = $operacion->getDivision();
echo $totalDivision;
echo '<br>';

?>