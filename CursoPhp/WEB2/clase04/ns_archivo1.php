<?php

namespace Dir\Sub\ns;

const con = 1;

function funcion(string $cad){
    echo "$cad";
}

class cl {
    const con_cl = 'ns';
    function dinamicoF(){
        echo "Metodo dinamico, ns: ". __NAMESPACE__ . '<br>';
    }
    static function staticF(){
        echo "Metodo estatico, ns: ". __NAMESPACE__ . '<br>';
    }
}