<?php

$password = 'hola';

echo md5($password).'<br>';
echo sha1($password).'<br>';

foreach (hash_algos() as $algo){
    echo $algo.': '.hash($algo, $password).'<br>';
}

$hash = password_hash($password, PASSWORD_DEFAULT, ['cost' => 10]);
echo $hash .'<br>';

if(password_verify($password, $hash)){
    echo 'correct';
}
