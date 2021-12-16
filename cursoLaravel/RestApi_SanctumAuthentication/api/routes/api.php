<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::group(['middleware' => ['cors']], function () {
        Route::resource('products', ProductController::class);
        Route::get('products/search/{name}', [ProductController::class,'search']);
        Route::post('/logout', [AuthController::class,'logout']);
        Route::any('/{any}', function(){ return 'url no validate'; })->where('any', '.*');
    });
});

