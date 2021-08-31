<?php
 $usuarios = ['pepe','ana','luis'];

 for($i = 0, $t =  sizeof($usuarios); $i < $t; $i++){
     echo $usuarios[$i] .'<br>';
 }

 echo '<br>';

 foreach ($usuarios as $key) {
     echo $key .'<br>';
 }
