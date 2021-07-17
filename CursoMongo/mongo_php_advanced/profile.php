<?php

session_start();
require_once('dbconnect.php');

if (isset($_SESSION['user'])) {
    header('Location: index.php');
}

if (isset($_GET['id'])) {
    header('Location: index.php');
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include('header.php'); ?>
    <div>
        <?php 
        $recent_tweets = get_recent_tweets($db);
        foreach ($recent_tweets as $tweet) {
            echo '<p>'  ;  
        }
        ?>
    </div>
</body>
</html>