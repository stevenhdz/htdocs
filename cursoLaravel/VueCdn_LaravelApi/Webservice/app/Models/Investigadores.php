<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investigadores extends Model
{
    use HasFactory;
    protected $fillable = ['Cedula','Nombre','Apellidos','Email','Celular','CodigoRol1'];
    public $timestamps = false;
    protected $primaryKey = "Cedula";
}
