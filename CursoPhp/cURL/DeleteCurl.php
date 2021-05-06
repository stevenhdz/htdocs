<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$delete = curl_init(); //sesion iniciar 

$arrays = 20;

//Configura múltiples opciones para una transferencia cURL
curl_setopt_array($delete, array(
    CURLOPT_URL => "http://localhost:8888/CursoPhp/api/destroy/".$arrays,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => TRUE,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE,
    CURLOPT_CUSTOMREQUEST => "DELETE",
    CURLOPT_HTTPHEADER => array(
        "Authorization: Basic bWl1c3VhcmlvOm1pcGFzcw=="
    ),
));

$resp = curl_exec($delete);

curl_close($delete);

echo $resp;
