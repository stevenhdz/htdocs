<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepartamentoInvestigaciones extends Model
{
    use HasFactory;
    protected $fillable = [
        'CodigoV',
        'Nombre',
        'Ubicacion',
        'Contacto_Tel',
        'Email'
    ];
    public $timestamps = false;
    protected $primaryKey = "CodigoV";
}
