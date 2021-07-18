<?php

session_start();
require_once('dbconnect.php');

if (!isset($_GET['id'])) {
    exit;
 }

 $user_id = $_GET['id'];
 $folower_id = $_SESSION['user'];

 $db->following->insertOne(array(
     'user' =>  new MongoDB\BSON\ObjectID("$user_id"),
     'follower' => new MongoDB\BSON\ObjectID("$folower_id")
 ));

header('Location: userlist.php');
?>