<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulos extends Model
{
    use HasFactory;
    protected $fillable = ['id','Descripcion1','Descripcion2'];
    public $timestamps = false;
    protected $primaryKey = "id";
}
