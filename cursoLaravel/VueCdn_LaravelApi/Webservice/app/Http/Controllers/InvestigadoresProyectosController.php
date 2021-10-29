<?php

namespace App\Http\Controllers;

use App\Models\Investigadores;
use App\Models\InvestigadoresProyectos;
use Illuminate\Http\Request;

class InvestigadoresProyectosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $InvestigadoresProyectos = InvestigadoresProyectos::all();
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
        $investigadoresProyecto = new InvestigadoresProyectos();
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
        $investigadoresProyecto = InvestigadoresProyectos::findOrFail($request->idProyecto);
        $investigadoresProyecto = InvestigadoresProyectos::findOrFail($request->Cedula);
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
        $investigadoresProyecto = InvestigadoresProyectos::destroy($request->idProyecto);
        $investigadoresProyecto = InvestigadoresProyectos::destroy($request->Cedula);
        return $investigadoresProyecto;
    }
}
