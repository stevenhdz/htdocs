<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-with, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE');

$data = json_decode(file_get_contents("php://input"));

//NOTE MAC
/* require_once "/Applications/MAMP/htdocs/CursoVuejs/CursoVuejsCdn/server/perf/shared/mongoClass.php";  */
//NOTE WINDOWS
require_once "/opt/lampp/htdocs/CursoVuejs/CursoVuejsCdn/server/perf/shared/mongoClass.php";

//funciones x compartidas

//add
if(isset($data->addproductos)){
    $mongodb = new mongoClass($data->TIMEZONE);
    echo $mongodb->addproductos($data->addproductos, $data->newText);
}

//list
if(isset($data->listOproductos)){
    $mongodb = new mongoClass($data->TIMEZONE);
    echo $mongodb->listOproductos();
}

if(isset($data->deleteProducts)){
    $mongodb = new mongoClass($data->TIMEZONE);
    echo $mongodb->deleteProducts($data->id);
}


if(isset($data->editProducts)){
    $mongodb = new mongoClass($data->TIMEZONE);
    echo $mongodb->editProducts($data->data,$data->id);
}


if(isset($data->listOproduct)){
    $mongodb = new mongoClass($data->TIMEZONE);
    echo $mongodb->listOproduct($data->listOproduct, $data->data);
}

?>