<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rols extends Model
{
    use HasFactory;
    protected $fillable = ['CodigoRol','Descripcion'];
    public $timestamps = false;
    protected $primaryKey = "CodigoRol";
    //protected $incrementing = false;
}
