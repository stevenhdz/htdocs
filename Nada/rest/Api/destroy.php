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
    header("Access-Control-Allow-Methods: DELETE");

    $id = $pageNum;
    $data = json_decode(file_get_contents("php://input"));
    
    $base = new Base;
    
    if($base->users("DELETE FROM users WHERE id = ?",[$id]))
    {
        header("HTTP/1.1 200 Ok");
        echo json_encode(['status' => 200, "msg" => 'registro eliminado: '.$id]);
        
        /* header("Refresh:5; url=http://localhost:8888/rest/api/destroy",true,303); */
          
    }
    else
    {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['status' => 400, "msg" => 'error']);
    }
