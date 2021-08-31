<?php

define('NOMBRESITIO','www.google.com');

echo NOMBRESITIO;

define('LENGUAJES',['php','javascript','python']);


echo '<br>';
var_dump(LENGUAJES);
echo '<br>';
print_r(LENGUAJES);

define('TECNOLOGIA','WEB 2');

if (defined('TECNOLOGIA')) {
    ECHO "ESTA DEFINIDA";
}else{
    echo "NO ESTA DEFINIDA";
}