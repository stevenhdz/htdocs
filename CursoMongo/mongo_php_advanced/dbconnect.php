
<?php

require_once '../vendor/autoload.php';
$client = new MongoDB\Client("mongodb://127.0.0.1:27017/");
$db = $client->users;