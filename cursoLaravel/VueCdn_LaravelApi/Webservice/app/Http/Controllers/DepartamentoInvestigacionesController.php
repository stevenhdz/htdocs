<?php

namespace App\Http\Controllers;

use App\Models\DepartamentoInvestigaciones;
use Illuminate\Http\Request;

class DepartamentoInvestigacionesController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departamento_investigacion = DepartamentoInvestigaciones::all();
        return $departamento_investigacion;
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
        $departamentoInvestigacion = new DepartamentoInvestigaciones();
        $departamentoInvestigacion->CodigoV = $request->CodigoV;
        $departamentoInvestigacion->Nombre = $request->Nombre;
        $departamentoInvestigacion->Ubicacion = $request->Ubicacion;
        $departamentoInvestigacion->Contacto_Tel = $request->Contacto_Tel;
        $departamentoInvestigacion->Email = $request->Email;
        $departamentoInvestigacion->save();
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
        $departamentoInvestigacion = DepartamentoInvestigaciones::findOrFail($request->CodigoV);
        $departamentoInvestigacion->Nombre = $request->Nombre;
        $departamentoInvestigacion->Ubicacion = $request->Ubicacion;
        $departamentoInvestigacion->Contacto_Tel = $request->Contacto_Tel;
        $departamentoInvestigacion->Email = $request->Email;
        $departamentoInvestigacion->save();
        return $departamentoInvestigacion;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $departamentoInvestigacion = DepartamentoInvestigaciones::destroy($request->CodigoV);
        return $departamentoInvestigacion;
    }
}
