<?php
 echo '<pre>';
define("GREETING1", "Welcome to W3Schools.com!");
echo GREETING1;


echo PHP_EOL;


define("GREETING", "Welcome to W3Schools.com!", true);
echo GREETING;


echo PHP_EOL;



define("cars", [
    "Alfa Romeo",
    "BMW",
    "Toyota"
  ]);
echo cars[0];



echo PHP_EOL;


define("GREETING2", "Welcome to W3Schools.com1!");

function myTest() {
  echo GREETING2;
}
 
myTest();
echo '</pre>';

?>