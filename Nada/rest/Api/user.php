<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: GET");

    $base = new Base;
    $id = $pageNum;
    if($base->users("SELECT * FROM users WHERE id = ?", [$id]))
    {
        if($base->count() > 0)
        {
            $user = $base->single();
            echo json_encode(['status' => 200, "user" => $user]);
        }
        else
        {
            echo json_encode(['status' => 200, "msg" => 'No hay registro con el id: '.$id]);
        }
    }
    