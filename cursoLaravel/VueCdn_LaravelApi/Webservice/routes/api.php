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
Route::put('/rols/{id}','App\Http\Controllers\rolsController@update');
Route::delete('/rols/delete/{CodigoRol}','App\Http\Controllers\rolsController@destroy');

//Route::resource('blog',App\Http\Controllers\BlogController::class)->only(['index','store','update','show','delete']);
