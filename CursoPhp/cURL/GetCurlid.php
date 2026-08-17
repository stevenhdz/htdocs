<?php

$get = curl_init(); //sesion iniciar 

$query = 19;

//Configura múltiples opciones para una transferencia cURL
curl_setopt_array($get, array(
    CURLOPT_URL => "http://localhost:8888/CursoPhp/api/user/".$query,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => TRUE,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE,
    CURLOPT_CUSTOMREQUEST => "GET",
));

$resp = curl_exec($get);

curl_close($get);

echo $resp;
