<?php
    error_reporting(E_ALL);
    ini_set('display_errors', '1');

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
    header("Content-Type: application/json"); //mimetypes
    header("Access-Control-Allow-Methods: PATCH");

    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $email = $data->email;
    $password = $data->password;
    $id = $data->id;
    $base = new Base;
    if(isset($id) != ""){
    if($base->users("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",[$name,$email,$password,$id]))
    {
        echo json_encode(['status' => 200, "msg" => 'actualizado']);
    }
    else if($base->users("UPDATE users SET password = ? WHERE id = ?",[$password,$id]))
    {
        echo json_encode(['status' => 200, "msg" => 'actualizado']);
    }
    }
    else
    {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['status' => 400, "msg" => 'error']);
    }