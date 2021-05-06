<?php

$x = 1;

while ($x <= 5) {
    echo "The number is: $x <br>";
    $x++;
}


echo '<br>';

$s = 6;

do {
    echo "The number is: $s <br>";
    $s++;
} while ($s <= 5);


echo '<br>';


for ($x = 0; $x <= 100; $x += 10) {
    echo "The number is: $x <br>";
}


echo '<br>';


$age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");

foreach ($age as $x => $val) {
    echo "$x = $val<br>";
}


echo '<br>';


$x = 0;

while ($x < 10) {
    if ($x == 4) {
        break;
    }
    echo "The number is: $x <br>";
    $x++;
}


echo '<br>';



$x = 0;

while ($x < 10) {
    if ($x == 4) {
        $x++;
        continue;
    }
    echo "The number is: $x <br>";
    $x++;
}
