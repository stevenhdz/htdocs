<?php

$post = curl_init(); //sesion iniciar 

$arrays = json_encode(array(
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'password' => $_POST['password']
));

//Configura múltiples opciones para una transferencia cURL
curl_setopt_array($post, array(
    CURLOPT_URL => "http://localhost:8888/CursoPhp/api/store",
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => TRUE,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $arrays,
    CURLOPT_HTTPHEADER => array(
        "Content-Type: application/json"
    ),
));

$resp = curl_exec($post);

curl_close($post);

echo $resp;



