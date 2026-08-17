<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HolaController extends Controller
{

    public function saludo(string $nom){
        return view("saludo", compact("nom"));
        //return "Hola $nom, bienvenido a laravel";
    }


}
