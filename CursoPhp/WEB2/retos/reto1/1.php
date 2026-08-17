<?php
class Factory {
    static function factorial($numero){
        $factorial = 1; 
        for ($i = 1; $i <= $numero; $i++){ 
          $factorial = $factorial * $i; 
        } 
        return $factorial; 
    }
}

echo Factory::factorial(5);
