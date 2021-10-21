<?php

namespace App\Http\Controllers;

use App\Models\Grupo_Investigacion;
use Illuminate\Http\Request;

class Grupo_InvestigacionController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gruposInvestigaciones = Grupo_Investigacion::all();
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
        $grupoInvestigacion = new Grupo_Investigacion();
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
        $grupoInvestigacion = Grupo_Investigacion::findOrFail($request->idG);
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
        $grupoInvestigacion = Grupo_Investigacion::destroy($request->idG);
        return $grupoInvestigacion;
    }
}
