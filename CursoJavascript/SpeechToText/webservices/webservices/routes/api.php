<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/Articulos','App\Http\Controllers\ArticulosController@index');
Route::post('/Articulos/create','App\Http\Controllers\ArticulosController@store');
Route::put('/Articulos/update/{id}','App\Http\Controllers\ArticulosController@update');
Route::delete('/Articulos/delete/{id}','App\Http\Controllers\ArticulosController@destroy');