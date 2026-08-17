<?php

namespace App\Http\Controllers;

use App\Models\GrupoInvestigaciones;
use Illuminate\Http\Request;

class GrupoInvestigacionesController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gruposInvestigaciones = GrupoInvestigaciones::all();
        return $gruposInvestigaciones;
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
        $grupoInvestigacion = new GrupoInvestigaciones();
        $grupoInvestigacion->idG = $request->idG;
        $grupoInvestigacion->Nombre = $request->Nombre;
        $grupoInvestigacion->Categoria_Minciencias = $request->Categoria_Minciencias;
        $grupoInvestigacion->save();
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
        $grupoInvestigacion = GrupoInvestigaciones::findOrFail($request->idG);
        $grupoInvestigacion->Nombre = $request->Nombre;
        $grupoInvestigacion->Categoria_Minciencias = $request->Categoria_Minciencias;
        $grupoInvestigacion->save();
        return $grupoInvestigacion;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $grupoInvestigacion = GrupoInvestigaciones::destroy($request->idG);
        return $grupoInvestigacion;
    }
}
