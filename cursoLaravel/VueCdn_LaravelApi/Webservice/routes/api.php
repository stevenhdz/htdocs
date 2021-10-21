<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/investigadores','App\Http\Controllers\investigadoresController@index');
Route::post('/investigadores','App\Http\Controllers\investigadoresController@store');
Route::put('/investigadores/{id}','App\Http\Controllers\investigadoresController@update');
Route::delete('/investigadores/{id}','App\Http\Controllers\investigadoresController@destroy');

Route::get('/rols','App\Http\Controllers\rolsController@index');
Route::post('/rols/create','App\Http\Controllers\rolsController@store');
Route::put('/rols/update/{id}','App\Http\Controllers\rolsController@update');
Route::delete('/rols/delete/{CodigoRol}','App\Http\Controllers\rolsController@destroy');

Route::get('/ProyectoInvestigacion','App\Http\Controllers\ProyectoInvestigacionController@index');
Route::post('/ProyectoInvestigacion/create','App\Http\Controllers\ProyectoInvestigacionController@store');
Route::put('/ProyectoInvestigacion/update/{idProyecto}','App\Http\Controllers\ProyectoInvestigacionController@update');
Route::delete('/ProyectoInvestigacion/delete/{idProyecto}','App\Http\Controllers\ProyectoInvestigacionController@destroy');

Route::get('/ClasificacionRevista','App\Http\Controllers\Clasificacion_RevistaController@index');
Route::post('/ClasificacionRevista/create','App\Http\Controllers\Clasificacion_RevistaController@store');
Route::put('/ClasificacionRevista/update/{idProyecto}','App\Http\Controllers\Clasificacion_RevistaController@update');
Route::delete('/ClasificacionRevista/delete/{idProyecto}','App\Http\Controllers\Clasificacion_RevistaController@destroy');

Route::get('/DepartamentoInvestigacion','App\Http\Controllers\Departamento_InvestigacionController@index');
Route::post('/DepartamentoInvestigacion/create','App\Http\Controllers\Departamento_InvestigacionController@store');
Route::put('/DepartamentoInvestigacion/update/{idProyecto}','App\Http\Controllers\Departamento_InvestigacionController@update');
Route::delete('/DepartamentoInvestigacion/delete/{idProyecto}','App\Http\Controllers\Departamento_InvestigacionController@destroy');

Route::get('/Producto','App\Http\Controllers\ProductoController@index');
Route::post('/Producto/create','App\Http\Controllers\ProductoController@store');
Route::put('/Producto/update/{idProyecto}','App\Http\Controllers\ProductoController@update');
Route::delete('/Producto/delete/{idProyecto}','App\Http\Controllers\ProductoController@destroy');

Route::get('/Revista','App\Http\Controllers\RevistaController@index');
Route::post('/Revista/create','App\Http\Controllers\RevistaController@store');
Route::put('/Revista/update/{idProyecto}','App\Http\Controllers\RevistaController@update');
Route::delete('/Revista/delete/{idProyecto}','App\Http\Controllers\RevistaController@destroy');

Route::get('/Programa','App\Http\Controllers\ProgramaController@index');
Route::post('/Programa/create','App\Http\Controllers\ProgramaController@store');
Route::put('/Programa/update/{idProyecto}','App\Http\Controllers\ProgramaController@update');
Route::delete('/Programa/delete/{idProyecto}','App\Http\Controllers\ProgramaController@destroy');

Route::get('/Facultad','App\Http\Controllers\FacultadController@index');
Route::post('/Facultad/create','App\Http\Controllers\FacultadController@store');
Route::put('/Facultad/update/{idProyecto}','App\Http\Controllers\FacultadController@update');
Route::delete('/Facultad/delete/{idProyecto}','App\Http\Controllers\FacultadController@destroy');

Route::get('/GrupoInvestigacion','App\Http\Controllers\Grupo_InvestigacionController@index');
Route::post('/GrupoInvestigacion/create','App\Http\Controllers\Grupo_InvestigacionController@store');
Route::put('/GrupoInvestigacion/update/{idProyecto}','App\Http\Controllers\Grupo_InvestigacionController@update');
Route::delete('/GrupoInvestigacion/delete/{idProyecto}','App\Http\Controllers\Grupo_InvestigacionController@destroy');

Route::get('/InvestigadoresProyecto','App\Http\Controllers\Investigadores_ProyectoController@index');
Route::post('/InvestigadoresProyecto/create','App\Http\Controllers\Investigadores_ProyectoController@store');
Route::put('/InvestigadoresProyecto/update/{idProyecto}','App\Http\Controllers\Investigadores_ProyectoController@update');
Route::delete('/InvestigadoresProyecto/delete/{idProyecto}','App\Http\Controllers\Investigadores_ProyectoController@destroy');
//Route::resource('blog',App\Http\Controllers\BlogController::class)->only(['index','store','update','show','delete']);
