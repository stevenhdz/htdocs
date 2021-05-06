<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: PUT");

    $data = json_decode(file_get_contents("php://input"));
    $clave = $data->clave;
    $idusuario = $data->idusuario;
    $base = new Base;
    if(isset($idusuario) != ""){
        if($base->usuario("UPDATE usuario SET clave = ? WHERE idusuario = ?",[$clave,$idusuario]))
        {
            echo json_encode(['status' => 200, "msg" => 'actualizado']);
        }
        else if($base->usuario("UPDATE usuario SET clave = ? WHERE idusuario = ?",[$clave,$idusuario]))
        {
            echo json_encode(['status' => 200, "msg" => 'actualizado']);
        }
    }
    else
    {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['status' => 400, "msg" => 'error']);
    }