<?php

require_once '../vendor/autoload.php';
require_once 'database/database.php';
require_once 'models/Usuario.php';


//NOTE get() todo

/* $usuarios = $database::table('persona')->get();

d($usuarios);  */

//NOTE find(9)

/* $usuarios = Prestamo::find(2);

d($usuarios);  */

//NOTE create()

/* $usuarios =  Prestamo::create([
'idPrestamos' => 27,
'NumeroPrestamo' => '3',
'FechaPrestamo' => '2020',
'HoraPrestamo' => '2020',
'idTipoPrestamo' => 1,
'idBibliotecario' => 1,
'idAlumno' => 2
]); */

//echo 'insertado: '. $usuarios->idPrestamos;

/* print("<pre>".print_r($usuarios,true)."</pre>"); */

//NOTE create()

$usuarios = Prestamo::find(11);

$usuarios->update([
    'NumeroPrestamo' => '88888',
]);

$usuarios->save();
