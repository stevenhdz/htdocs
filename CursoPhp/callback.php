<?php
$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map( function($item) { return strlen($item); } , $strings);
print_r($lengths);





  function exclaim($str) {
    return $str . "! ";
  }
  
  function ask($str) {
    return $str . "? ";
  }
  
  function printFormatted($str, $format) {
    // Calling the $format callback function
    echo $format($str);
  }
  

  echo '<br>';
  // Pass "exclaim" and "ask" as callback functions to printFormatted()
  printFormatted("Hello world", "exclaim");
  printFormatted("Hello world", "ask");
?>