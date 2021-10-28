<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectoInvestigaciones extends Model
{
    use HasFactory;
    protected $fillable = ['idProyecto', 'nombre', 'detalles', 'fechaApertura', 'fechaCierre'];
    public $timestamps = false;
    protected $primaryKey = "idProyecto";
}
