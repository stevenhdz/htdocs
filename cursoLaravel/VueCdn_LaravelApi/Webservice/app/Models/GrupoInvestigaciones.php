<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrupoInvestigaciones extends Model
{
    use HasFactory;
    protected $fillable = ['idG',
    'Nombre',
    'Categoria_Minciencias'];
    public $timestamps = false;
    protected $primaryKey = "idG";
}
