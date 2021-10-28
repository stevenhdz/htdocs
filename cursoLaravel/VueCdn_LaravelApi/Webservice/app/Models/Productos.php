<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;
    protected $fillable = [
        'Idproducto',
        'Descripcion',
        'Titulo_Detalle',
        'Nropaginas'
    ];
    public $timestamps = false;
    protected $primaryKey = "Idproducto";
}
