<?php

use App\Http\Controllers\CursoController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

//http://localhost:8888/Cursolaravel/blog/public/cursos mi ruta


Route::get('/', HomeController::class);


Route::get('cursos', [CursoController::class, 'index']);


Route::get('cursos/create',  [CursoController::class, 'create']);


Route::get('cursos/{curso}',  [CursoController::class, 'show']);

/* Route::get('cursos', function () {
    return "Bienvenido a cursos";
}); */

/* Route::get('cursos/create', function () {
    return "En esta pagina podras crear un curso";
}); */

/* Route::get('cursos/{curso}', function ($curso) {
    return "Bienvenido a cursos: $curso";
}); */

/* Route::get('cursos/{curso}/{categoria}', function ($curso,$categoria) {
    return "Bienvenido a cursos: $curso, de la categoria $categoria";
}); */



/*con el ? le dice que es opcional*/
/* Route::get('cursos/{curso}/{categoria?}', function ($curso,$categoria = null) {
 if($categoria) {
    return "Bienvenido a cursos: $curso, de la categoria $categoria";
 }else {
    return "Bienvenido a cursos: $curso";
 }
}); */
