<?php

namespace Dir\Sub;

require 'ns_archivo1.php';

const con = 2;

function funcion(string $cad){
    echo "<h2>$cad<h2>";
}

class cl {
    const con_cl = 'Sub';
    function dinamicoF(){
        echo "Metodo dinamico, ns: ". __NAMESPACE__ . '<br>';
    }
    static function staticF(){
        echo "Metodo estatico, ns: ". __NAMESPACE__ . '<br>';
    }
}





/* No cualificados */
funcion('No cualificados');

echo "Valor de la const ". con . "<br>";
cl::staticF();

$c1 = new cl;
$c1->dinamicoF();

//constantes static
echo "Valor de la const en la clase <b>cl</b> de ns Dir/Sub <b> ". cl::con_cl . "</b><br><br>";






/*  cualificados */
ns\funcion('Elementos cualificados <br>');

echo "Valor de la const ". ns\con . "<br>";
ns\cl::staticF();

$c1 = new ns\cl;
$c1->dinamicoF();

//constantes static
echo "Valor de la const en la clase <b>cl</b> de ns Dir/Sub/ns <b> ". ns\cl::con_cl . "</b><br><br><br>";






/* completamente  cualificados */
\Dir\Sub\ns\funcion('completamente cualificados');
\Dir\Sub\funcion('completamente cualificados');
//actual
namespace\cl::staticF();


use function \Dir\Sub\ns\funcion as otraF;
otraF('Otra funcion <br>');

use const \Dir\Sub\con as otraC;
echo "Valor de la const en la clase <b>cl</b> de ns Dir/Sub/ns <b> ". otraC . "</b><br><br><br>";

use \Dir\Sub\ns\cl as clase;
echo clase::con_cl;