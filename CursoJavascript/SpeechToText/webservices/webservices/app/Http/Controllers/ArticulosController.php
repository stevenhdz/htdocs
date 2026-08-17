<?php

namespace App\Http\Controllers;

use App\Models\Articulos;
use Illuminate\Http\Request;

class ArticulosController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articulos = Articulos::all();
        return response()->json($articulos);

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
        $articulos = new Articulos();
        $articulos->Descripcion1 = $request->Descripcion1;
        $articulos->Descripcion2 = $request->Descripcion2;
        $articulos->save();
        return response()->json($articulos);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

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
        $articulos = Articulos::findOrFail($request->id);
        $articulos->Descripcion1 = $request->Descripcion1;
        $articulos->Descripcion2 = $request->Descripcion2;
        $articulos->save();
        return $articulos;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $articulos = Articulos::destroy($request->id);
        return $articulos;
    }
}
