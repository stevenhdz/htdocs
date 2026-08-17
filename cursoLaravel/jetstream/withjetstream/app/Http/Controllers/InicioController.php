<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InicioController extends Controller
{
   public function index(Request $peticion){
    $arreglo = ['nombres' => $peticion->query('nombres','NN')];
    return view('vista1')->with($arreglo);
   }
}
