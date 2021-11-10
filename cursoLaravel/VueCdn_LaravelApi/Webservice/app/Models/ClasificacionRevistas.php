<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClasificacionRevistas extends Model
{
    use HasFactory;
    protected $fillable = ['idClasificacion','Detalle'];
    public $timestamps = false;
    protected $primaryKey = "idClasificacion";
}
