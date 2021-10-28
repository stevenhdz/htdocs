<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Revistas extends Model
{
    use HasFactory;
    protected $fillable = [
        'IdRevista',
        'Nombre',
        'Pais',
        'Detalles_Publicidad'
    ];
    public $timestamps = false;
    protected $primaryKey = "IdRevista";

}
