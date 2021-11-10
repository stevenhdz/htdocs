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

Route::get('/investigadores','App\Http\Controllers\InvestigadoresController@index');
Route::post('/Investigadores/create','App\Http\Controllers\InvestigadoresController@store');
Route::put('/Investigadores/update/{Cedula}','App\Http\Controllers\InvestigadoresController@update');
Route::delete('/Investigadores/delete/{Cedula}','App\Http\Controllers\InvestigadoresController@destroy');

Route::get('/rols','App\Http\Controllers\rolsController@index');
Route::post('/rols/create','App\Http\Controllers\rolsController@store');
Route::put('/rols/update/{id}','App\Http\Controllers\rolsController@update');
Route::delete('/rols/delete/{CodigoRol}','App\Http\Controllers\rolsController@destroy');

Route::get('/ProyectoInvestigacion','App\Http\Controllers\ProyectoInvestigacionesController@index');
Route::post('/ProyectoInvestigacion/create','App\Http\Controllers\ProyectoInvestigacionesController@store');
Route::put('/ProyectoInvestigacion/update/{idProyecto}','App\Http\Controllers\ProyectoInvestigacionesController@update');
Route::delete('/ProyectoInvestigacion/delete/{idProyecto}','App\Http\Controllers\ProyectoInvestigacionesController@destroy');

Route::get('/ClasificacionRevista','App\Http\Controllers\ClasificacionRevistasController@index');
Route::post('/ClasificacionRevista/create','App\Http\Controllers\ClasificacionRevistasController@store');
Route::put('/ClasificacionRevista/update/{idClasificacion}','App\Http\Controllers\ClasificacionRevistasController@update');
Route::delete('/ClasificacionRevista/delete/{idClasificacion}','App\Http\Controllers\ClasificacionRevistasController@destroy');

Route::get('/DepartamentoInvestigacion','App\Http\Controllers\DepartamentoInvestigacionesController@index');
Route::post('/DepartamentoInvestigacion/create','App\Http\Controllers\DepartamentoInvestigacionesController@store');
Route::put('/DepartamentoInvestigacion/update/{CodigoV}','App\Http\Controllers\DepartamentoInvestigacionesController@update');
Route::delete('/DepartamentoInvestigacion/delete/{CodigoV}','App\Http\Controllers\DepartamentoInvestigacionesController@destroy');

Route::get('/Producto','App\Http\Controllers\ProductosController@index');
Route::post('/Producto/create','App\Http\Controllers\ProductoController@store');
Route::put('/Producto/update/{Idproducto}','App\Http\Controllers\ProductoController@update');
Route::delete('/Producto/delete/{Idproducto}','App\Http\Controllers\ProductoController@destroy');

Route::get('/Revista','App\Http\Controllers\RevistasController@index');
Route::post('/Revista/create','App\Http\Controllers\RevistasController@store');
Route::put('/Revista/update/{IdRevista}','App\Http\Controllers\RevistasController@update');
Route::delete('/Revista/delete/{IdRevista}','App\Http\Controllers\RevistasController@destroy');

Route::get('/Programa','App\Http\Controllers\ProgramasController@index');
Route::post('/Programa/create','App\Http\Controllers\ProgramasController@store');
Route::put('/Programa/update/{IdPrograma}','App\Http\Controllers\ProgramasController@update');
Route::delete('/Programa/delete/{IdPrograma}','App\Http\Controllers\ProgramasController@destroy');

Route::get('/Facultades','App\Http\Controllers\FacultadesController@index');
Route::post('/Facultad/create','App\Http\Controllers\FacultadesController@store');
Route::put('/Facultad/update/{idFacultad}','App\Http\Controllers\FacultadesController@update');
Route::delete('/Facultad/delete/{idFacultad}','App\Http\Controllers\FacultadesController@destroy');

Route::get('/GrupoInvestigacion','App\Http\Controllers\GrupoInvestigacionesController@index');
Route::post('/GrupoInvestigacion/create','App\Http\Controllers\GrupoInvestigacionesController@store');
Route::put('/GrupoInvestigacion/update/{idG}','App\Http\Controllers\GrupoInvestigacionesController@update');
Route::delete('/GrupoInvestigacion/delete/{idG}','App\Http\Controllers\GrupoInvestigacionesController@destroy');

Route::get('/InvestigadoresProyecto','App\Http\Controllers\InvestigadoresProyectosController@index');
Route::post('/InvestigadoresProyecto/create','App\Http\Controllers\InvestigadoresProyectosController@store');
Route::put('/InvestigadoresProyecto/update/{idProyecto}','App\Http\Controllers\InvestigadoresProyectosController@update');
Route::delete('/InvestigadoresProyecto/delete/{idProyecto}','App\Http\Controllers\InvestigadoresProyectosController@destroy');
//Route::resource('blog',App\Http\Controllers\BlogController::class)->only(['index','store','update','show','delete']);
