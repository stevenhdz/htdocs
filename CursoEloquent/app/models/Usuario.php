<?php

use Illuminate\Database\Eloquent\Model;

class Prestamo extends Model
{
    //NOTE timestamp con el create
    public $timestamps = false;

    protected $tabla = 'prestamos';

    protected $primaryKey = 'idPrestamos';

    protected $fillable = [
        'idPrestamos',
        'NumeroPrestamo',
        'FechaPrestamo',
        'HoraPrestamo',
        'idTipoPrestamo',
        'idBibliotecario',
        'idAlumno',
    ];
}
