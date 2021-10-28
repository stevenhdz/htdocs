<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facultades extends Model
{
    use HasFactory;
    protected $fillable = ['idFacultad','Nombre'];
    public $timestamps = false;
    protected $primaryKey = "idFacultad";
}
