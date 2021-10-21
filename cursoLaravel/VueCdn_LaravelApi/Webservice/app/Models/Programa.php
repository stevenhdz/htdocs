<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programa extends Model
{
    use HasFactory;
    protected $fillable = ['IdPrograma',
    'Nombre'];
    public $timestamps = false;
    protected $primaryKey = "IdPrograma";
}
