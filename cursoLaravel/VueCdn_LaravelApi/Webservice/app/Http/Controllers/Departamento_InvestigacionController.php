<?php

namespace App\Http\Controllers;

use App\Models\Departamento_Investigacion;
use Illuminate\Http\Request;

class Departamento_InvestigacionController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departamento_investigacion = Departamento_Investigacion::all();
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
        $departamentoInvestigacion = new Departamento_Investigacion();
        $departamentoInvestigacion->CodigoV = $request->CodigoV;
        $departamentoInvestigacion->Nombre = $request->Nombre;
        $departamentoInvestigacion->Ubicación = $request->Ubicación;
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
        $departamentoInvestigacion = Departamento_Investigacion::findOrFail($request->CodigoV);
        $departamentoInvestigacion->Nombre = $request->Nombre;
        $departamentoInvestigacion->Ubicación = $request->Ubicación;
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
        $departamentoInvestigacion = Departamento_Investigacion::destroy($request->CodigoV);
        return $departamentoInvestigacion;
    }
}
