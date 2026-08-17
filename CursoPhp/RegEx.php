<?php
$str = "Visit W3Schools";
$pattern = "/w3schools/i";
echo preg_match($pattern, $str); // Outputs 1

echo '<br>';

$str = "The rain in SPAIN falls mainly on the plains.";
$pattern = "/ain/i";
echo preg_match_all($pattern, $str); // Outputs 4

echo '<br>';

$str = "Visit Microsoft!";
$pattern = "/microsoft/i";
echo preg_replace($pattern, "W3Schools", $str); // Outputs "Visit W3Schools!"


$cadena1 = "1234567";
$cadena2 = "abcdefg";
$patron = "/^[[:digit:]]+$/";

if (preg_match($patron, $cadena1)) {
    print "<p>La cadena $cadena1 son sólo números.</p>\n";
} else {
    print "<p>La cadena $cadena1 no son sólo números.</p>\n";
}

if (preg_match($patron, $cadena2)) {
    print "<p>La cadena $cadena2 son sólo números.</p>\n";
} else {
    print "<p>La cadena $cadena2 no son sólo números.</p>\n";
}

?>