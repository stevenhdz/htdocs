<?php
echo readfile("webdictionary1.txt");

echo '<br>';

$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));

echo '<br>';

$myfile = fopen("webdictionary2.txt", "r") or die("Unable to open file!");

while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);
?>