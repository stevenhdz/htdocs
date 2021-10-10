<?php

use App\Http\Controllers\InicioController;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//View use
if(View::exists('vista2')){
    Route::get('/vista2', function () {
        return view('vista2');
    });
}else{
    Route::get('/vista2', function () {
        return 'NO existe';
    });
}


/*Route::get('/', function () {
    return view('welcome');
});*/
//con el controlador
Route::get('/','App\Http\Controllers\InicioController@index');

Route::get('/texto', function(){
    return '<h1>hola</h1>';
});

Route::get('/arreglo', function(){
    $arreglo = [
        'id' => '1',
        'description' => 'producto 1'
    ];
    return $arreglo;
});

//parametros obligatorios y no obligatorios
Route::get('/nombre/{nombre}', function($nombre){
    return $nombre;
});

Route::get('/cliente/{cliente?}', function($cliente='empty'){
    return $cliente;
});


//redireccionar
Route::get('/ruta1', function(){
    return '<h1>ruta 1</h1>';
})->name('ruta1');

Route::get('/ruta2', function(){
    return redirect()->route('ruta1');
});


//expresion regular
Route::get('/numeros/{numeros}', function($numeros){
    return $numeros;
})->where('numeros','[0-9]+');

Route::get('/usuario/{usuario}', function($usuario){
    return $usuario;
})->where('usuario','[A-Za-z]+');

//vista pasar el nombre
/* Route::get('/vista1', function () {
    return view('vista1',['nombre' => 'alex']);
}); */


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
