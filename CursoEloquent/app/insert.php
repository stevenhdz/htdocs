<?php

require_once '../vendor/autoload.php';
require_once './database/database.php';
require_once './models/Usuario.php';

try {

    print(
        print_r(
        'VARIABLES:

            idPrestamo,
            NumeroPrestamo,
            FechaPrestamo,
            HoraPrestamo,
            idTipoPrestamo,
            idBibliotecario,
            idAlumno',true
        )
    );
    
    $idPrestamo = $argv[1];
    $NumeroPrestamo = $argv[2];
    $FechaPrestamo = $argv[3];
    $HoraPrestamo = $argv[4];
    $idTipoPrestamo = $argv[5];
    $idBibliotecario = $argv[6];
    $idAlumno = $argv[7];

    $usuarios = Prestamo::find($idPrestamo);
    if (!isset($usuarios)) {
        $usuarios = Prestamo::create([
            'idPrestamos' => $idPrestamo,
            'NumeroPrestamo' => $NumeroPrestamo,
            'FechaPrestamo' => $FechaPrestamo,
            'HoraPrestamo' => $HoraPrestamo,
            'idTipoPrestamo' => $idTipoPrestamo,
            'idBibliotecario' => $idBibliotecario,
            'idAlumno' => $idAlumno,
        ]);
        throw new Exception(' -----> Registro exitoso');
    } else {
        throw new Exception(' -----> Duplicado');
    }

} catch (Exception $th) {
    echo $th->getMessage();
}
