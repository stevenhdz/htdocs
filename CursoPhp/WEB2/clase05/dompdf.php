<?php

require "./vendor/autoload.php";

use Dompdf\Dompdf;

$dompdf = new Dompdf;
//var_dump($dompdf);

$html = "<h2>Generando un documento PDF con la libreria DomPdf</h2>";
$html .= "<p> la forma mas facil de general lineas </p>";

$dompdf->loadHTML($html);
$dompdf->render();
$dompdf->stream('prueba.pdf',["attachment" => 0]);
