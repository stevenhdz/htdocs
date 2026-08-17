<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programas extends Model
{
    use HasFactory;
    protected $fillable = ['IdPrograma',
    'Nombre','idF'];
    public $timestamps = false;
    protected $primaryKey = "IdPrograma";
}
