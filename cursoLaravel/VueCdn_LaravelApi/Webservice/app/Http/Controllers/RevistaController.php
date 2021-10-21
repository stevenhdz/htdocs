<?php

namespace App\Http\Controllers;

use App\Models\Revista;
use Illuminate\Http\Request;

class RevistaController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $revistas = Revista::all();
        return $revistas;
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
        $revista = new Revista();
        $revista->IdRevista = $request->IdRevista;
        $revista->Nombre = $request->Nombre;
        $revista->Pais = $request->Pais;
        $revista->Detalles_Publicidad = $request->Detalles_Publicidad;
        $revista->save();
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
        $revista = Revista::findOrFail($request->IdRevista);
        $revista->Nombre = $request->Nombre;
        $revista->Pais = $request->Pais;
        $revista->Detalles_Publicidad = $request->Detalles_Publicidad;
        $revista->save();
        return $revista;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $revista = Revista::destroy($request->IdRevista);
        return $revista;
    }
}
