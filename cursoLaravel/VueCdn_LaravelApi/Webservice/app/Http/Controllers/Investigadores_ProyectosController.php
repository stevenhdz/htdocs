<?php

namespace App\Http\Controllers;

use App\Models\Investigadores;
use App\Models\Investigadores_Proyectos;
use Illuminate\Http\Request;

class Investigadores_ProyectosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $InvestigadoresProyectos = Investigadores_Proyectos::all();
        return $InvestigadoresProyectos;
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
        $investigadoresProyecto = new Investigadores_Proyectos();
        $investigadoresProyecto->idProyecto = $request->idProyecto;
        $investigadoresProyecto->Cedula = $request->Cedula;
        $investigadoresProyecto->save();
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
        $investigadoresProyecto = Investigadores_Proyectos::findOrFail($request->idProyecto);
        $investigadoresProyecto = Investigadores_Proyectos::findOrFail($request->Cedula);
        $investigadoresProyecto->save();
        return $investigadoresProyecto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $investigadoresProyecto = Investigadores_Proyectos::destroy($request->idProyecto);
        $investigadoresProyecto = Investigadores_Proyectos::destroy($request->Cedula);
        return $investigadoresProyecto;
    }
}
