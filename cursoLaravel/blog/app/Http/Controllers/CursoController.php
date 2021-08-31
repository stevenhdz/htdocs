<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index(){
        return "Bienvenidos";
    }

    public function create(){
        return "Creando";
    }

    public function show($curso){
        return "Bienvenidos a $curso";
    }
}
