<?php

namespace App\Http\Controllers;

use App\Models\Investigadores;
use Illuminate\Http\Request;

class InvestigadoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $investigadores = Investigadores::all();
        return $investigadores;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $investigador = new Investigadores();
        $investigador->Cedula = $request->Cedula;
        $investigador->Nombre = $request->Nombre;
        $investigador->Apellidos = $request->Apellidos;
        $investigador->Celular = $request->Celular;
        $investigador->CodigoRol = $request->CodigoRol;
        $investigador->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $investigador = Investigadores::findOrFail($request->Cedula);
        $investigador->Nombre = $request->Nombre;
        $investigador->Apellidos = $request->Apellidos;
        $investigador->Celular = $request->Celular;
        $investigador->CodigoRol = $request->CodigoRol;
        $investigador->save();
        return $investigador;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $investigador = Investigadores::destroy($request->id);
        return $investigador;
    }
}





// class BlogController extends Controller
// {
//     /**
//      * Display a listing of the resource.
//      *
//      * @return \Illuminate\Http\Response
//      */
//     public function index()
//     {
//         $blogs = Blog::all();
//         return response()->json($blogs);
//     }

//     /**
//      * Show the form for creating a new resource.
//      *
//      * @return \Illuminate\Http\Response
//      */
//     public function create()
//     {
//         //
//     }

//     /**
//      * Store a newly created resource in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @return \Illuminate\Http\Response
//      */
//     public function store(Request $request)
//     {
//       $blog = Blog::create($request->post());
//        return response()->json(['blog'=>$blog]);
//     }

//     /**
//      * Display the specified resource.
//      *
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     public function show(Blog $blog)
//     {
//     return response()->json($blog);
//     }

//     /**
//      * Show the form for editing the specified resource.
//      *
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     public function edit($id)
//     {
//         //
//     }

//     /**
//      * Update the specified resource in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     public function update(Request $request, Blog $blog)
//     {
//         $blog->fill($request->post())->save();
//         return response()->json([
//             'blog'=>$blog
//         ]);
//     }

//     /**
//      * Remove the specified resource from storage.
//      *
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     public function destroy(Blog $blog)
//     {
//         $blog->delete();
//         return response()->json([
//             'mensaje'=>'Blog eliminado'
//         ]);
//     }
// }
