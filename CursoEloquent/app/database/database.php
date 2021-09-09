<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$database = new Capsule;

$database->addConnection([
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'bibliotecaremington',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);

$database->setAsGlobal();
$database->bootEloquent();