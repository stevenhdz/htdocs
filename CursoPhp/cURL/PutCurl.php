<?php

$put = curl_init(); //sesion iniciar 

$arrays = json_encode(array(
    'id' => '19',
    'name' => 'steven curl1234',
    'email' => 'steven@gmail.com1234',
    'password' => 'steven1234'
));

//Configura múltiples opciones para una transferencia cURL
curl_setopt_array($put, array(
    CURLOPT_URL => "http://localhost:8888/CursoPhp/api/update",
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => TRUE,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE,
    CURLOPT_CUSTOMREQUEST => "PUT",
    CURLOPT_POSTFIELDS => $arrays,
    CURLOPT_HTTPHEADER => array(
        "Content-Type: application/json"
    ),
));

$resp = curl_exec($put);

curl_close($put);

echo $resp;



