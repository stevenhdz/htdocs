<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = Productos::all();
        return $productos;
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
        $producto = new Productos();
        $producto->idClasificacion = $request->idClasificacion;
        $producto->Descripcion = $request->Descripcion;
        $producto->Titulo_Detalle = $request->Titulo_Detalle;
        $producto->Nropaginas = $request->Nropaginas;
        $producto->save();
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
        $producto = Productos::findOrFail($request->Idproducto);
        $producto->Descripcion = $request->Descripcion;
        $producto->Titulo_Detalle = $request->Titulo_Detalle;
        $producto->Nropaginas = $request->Nropaginas;
        $producto->save();
        return $producto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $producto = Productos::destroy($request->Idproducto);
        return $producto;
    }
}
