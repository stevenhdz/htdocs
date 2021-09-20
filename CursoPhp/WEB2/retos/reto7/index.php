<?php

require __DIR__ . '/vendor/autoload.php';

use SebastianBergmann\Timer\Timer;

$timer = new Timer;

$timer->start();
$x = 0;
foreach (\range(0, 5000000) as $i) {
 $x++;
}

$duration = $timer->stop();

echo '<pre>'; 
var_dump(get_class($duration));
var_dump($duration->asString()); 
var_dump($duration->asSeconds()); 
var_dump($duration->asMilliseconds()); 
var_dump($x);
echo '</pre>';
