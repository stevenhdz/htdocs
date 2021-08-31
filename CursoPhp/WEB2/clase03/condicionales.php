<?php 

//tipados o no tipados


    $x = 1;
    $y = "1";

    if($x == $y){
        echo "Son iguales";
    }else{
        echo "son diferentes";
    }
    echo '<br>';

    $nombre = 'Juan';
    echo $nombre ? $nombre : 'No name';
    echo '<br>';

    $nombre = 'Andres';
    echo $nombre ?? 'No name';  
    echo '<br>';