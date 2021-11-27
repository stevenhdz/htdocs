<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('products', ProductController::class);
Route::get('products/search/{name}', [ProductController::class,'search']);
Route::any('/{any}', function(){ return 'The url no exists'; })->where('any', '.*');
