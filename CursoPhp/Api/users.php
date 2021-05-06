<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: GET");

    $base = new Base;
    if($base->users("SELECT * FROM users"))
    {
        if($base->count()>0)
        {
            $users = $base->fetch();
            echo json_encode($users);
        }
        else
        {
            echo json_encode(['status' => 200, "msg" => 'No hay datos']);
        }
    }