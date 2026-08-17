<?php
/* error_reporting(E_ALL);
ini_set('display_errors', '1'); */

$valid_passwords = array ("miusuario" => password_hash("mipass", PASSWORD_DEFAULT));
$valid_users = array_keys($valid_passwords);

$user = $_SERVER['PHP_AUTH_USER'];
$pass = $_SERVER['PHP_AUTH_PW'];

$validated = (in_array($user, $valid_users)) && ($pass == password_verify($pass, $valid_passwords[$user]));

if (!$validated) {
  header('WWW-Authenticate: Basic realm="My Realm"');
  header('HTTP/1.0 401 Unauthorized');
  die ("Not authorized");
}

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: POST");

    
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $email = $data->email;
    $password = password_hash($data->password, PASSWORD_DEFAULT);
    $base = new Base;
    if($base->users("INSERT INTO users(name,email,password) VALUES (?,?,?)",
    [$name,$email,$password]))
    {
        header("HTTP/1.1 200 OK");
        echo json_encode(['status' => 200, "msg" => 'registro agregado']);
    }
    else
    {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['status' => 400, "msg" => 'error']);
    }