<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//permisos
header('Content-type: application/json; charset=utf-8');

//NOTE: ruta mac
/* require_once "/Applications/MAMP/htdocs/CursoVuejs/CursoVuejsCdn/server/customize/prueba.php"; */
//NOTE: windows

require_once "/opt/lampp/htdocs/CursoVuejs/CursoVuejsCdn/server/customize/prueba.php";
class mongoClass
{
    use prueba;
}


?>