<?php

namespace App\Http\Controllers;

use App\Models\ProyectoInvestigaciones;
use Illuminate\Http\Request;

class ProyectoInvestigacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $proyectoInvestigacion = ProyectoInvestigaciones::all();
        return response()->json($proyectoInvestigacion);
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
        $proyectoInvestigacion = new ProyectoInvestigaciones();
        $proyectoInvestigacion->nombre = $request->nombre;
        $proyectoInvestigacion->detalles = $request->detalles;
        $proyectoInvestigacion->fechaApertura = $request->fechaApertura;
        $proyectoInvestigacion->fechaCierre = $request->fechaCierre;
        $proyectoInvestigacion->save();
        return response()->json($proyectoInvestigacion);

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
        $proyectoInvestigacion = ProyectoInvestigaciones::findOrFail($request->idProyecto);
        $proyectoInvestigacion->nombre = $request->nombre;
        $proyectoInvestigacion->detalles = $request->detalles;
        $proyectoInvestigacion->fechaApertura = $request->fechaApertura;
        $proyectoInvestigacion->fechaCierre = $request->fechaCierre;
        $proyectoInvestigacion->save();
        return $proyectoInvestigacion;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $proyectoInvestigacion = ProyectoInvestigaciones::destroy($request->idProyecto);
        return $proyectoInvestigacion;
    }
}
