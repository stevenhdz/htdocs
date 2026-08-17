<?php

error_reporting(E_ALL);
ini_set('display_errors', '1'); 

$post = curl_init(); //sesion iniciar 

        $arrays = trim($_POST['json']); 
        $method = $_POST['method'];
        $api = $_POST['api'];
        $type = $_POST['type'];
        $token = $_POST['token'];

        //bWl1c3VhcmlvOm1pcGFzcw==
        $types = "Content-Type: ".$type;
        $tokens = "Authorization: Basic ".$token;
        $apis = "http://localhost:8888/Cursophp/Api/".$api;

//Configura múltiples opciones para una transferencia cURL
curl_setopt_array($post, array(
    CURLOPT_URL => $apis,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => TRUE,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE,
    CURLOPT_CUSTOMREQUEST => strtoupper($method),
    CURLOPT_POSTFIELDS => $arrays,
    CURLOPT_HTTPHEADER => array(
      $types,
      $tokens
    ),
));

$resp = curl_exec($post);
curl_close($post);
echo $resp;


