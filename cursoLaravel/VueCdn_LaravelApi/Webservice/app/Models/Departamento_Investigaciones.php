<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departamento_Investigaciones extends Model
{
    use HasFactory;
    protected $fillable = [
        'CodigoV',
        'Nombre',
        'Ubicación',
        'Contacto_Tel',
        'Email'
    ];
    public $timestamps = false;
    protected $primaryKey = "CodigoV";
}
