<?php
//http://localhost:8888/CursoPhp/WEB2/clase04/envio_get.php?descr=Ollas
$description = isset($_GET['descr']) ? filter_var($_GET['descr'],FILTER_SANITIZE_STRING) : "NO DEFINIDO";
echo $description;