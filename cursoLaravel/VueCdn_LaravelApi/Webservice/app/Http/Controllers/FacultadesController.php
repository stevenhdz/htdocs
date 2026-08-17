<?php

namespace App\Http\Controllers;

use App\Models\Facultades;
use Illuminate\Http\Request;

class FacultadesController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //funcion statica ::
        //funcion ->
        $facultades = Facultades::all();
        return $facultades;
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
        //instanciando el modelo
        $facultad = new Facultades();
        $facultad->idFacultad = $request->idFacultad;
        $facultad->Nombre = $request->Nombre;
        $facultad->save();
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
        $facultad = Facultades::findOrFail($request->idFacultad);
        $facultad->Nombre = $request->Nombre;
        $facultad->save();
        return $facultad;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $facultad = Facultades::destroy($request->idFacultad);
        return $facultad;
    }
}
